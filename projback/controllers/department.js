import Department from "../models/department.js"


export const getDepartmentById = (req, res, next, id) => {
    Department.findById(id).exec((err, cate) => {
        if (err || !cate) {
            console.log(err)
            return res.status(400).json({
                err: "Department not found"
            })
        }
        req.department = cate;
        next();
    })
}

export const createDepartment = (req, res) => {
    const department = new Department(req.body);
    department.save((err, departmentt) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: "not able to save department"
            })
        }
        res.json({ departmentt })
    })
}

export const getDepartment = (req, res) => {
    return res.json(req.category);
}

export const getAllDepartments = (req, res) => {
    Department.find().exec((err, items) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: " No Departments are found in DB"
            })
        }
        res.json(items)
    })
}

export const updateDepartment = (req, res) => {
    try {
        const departmentUpdation = req.c;
        if (!req.Department) return res.send("No Department found!")
        departmentUpdation.name = req.body.name;

        department.save((err, updatedDepartment) => {
            if (err || !updatedDepartment) {
                return res.status(400).json({
                    error: "Failed to update department"
                });
            }
            res.json(updatedDepartment);
        });
    } catch (err) {
        console.log(err)
    }
};

export const deleteDepartment = (req, res) => {
    const department = req.department;

    department.deleteOne((err, deleteddepartment) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete this department"
            });
        }
        res.json({
            message: "Successfull deleted"
        });
    });
};

export const countDep = (req, res) => {
    Department.countDocuments((err, countt) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: "not able to count users"
            })
        }
        console.log("hi")
        res.json(countt);
    })
}