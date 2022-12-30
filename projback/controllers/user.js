import user from "../models/user.js"
import User from "../models/user.js"



export const getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: " No user was found in DB"
            })
        }
        req.profile = user;
        next();
    })
}
export const getUserCreateById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: " No user was found in DB"
            })
        }
        req.user = user;
        next();
    })
}
export const getAllUsers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: "No products found"
            })
        }
        res.json(users)
    })
}
export const getAllUniqueDepartments = (req, res) => {
    User.distinct("department", {}, (err, dep) => {
        if (err) {
            return res.status(400).json({
                error: "NO category found"
            });
        }
        res.json(dep);
    });
};
export const createUser = (req, res) => {
    const user = User(req.body);
    user.save((err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: "not able to save user"
            })
        }
        res.send({
            idno: user.idno,
            name: user.name,
            email: user.email,
            id: user._id
        })
    })
}
export const getUser = (req, res) => {
    req.user.photo = undefined
    req.user.encry_password = undefined;
    return res.json(req.user);
}
export const photo = (req, res, next) => {
    if (req.user.photo.data) {
        res.set("Content-Type", req.user.photo.contentType)
        res.send(req.user.photo.data)
    }
    next();
}
export const deleteUser = (req, res) => {
    const user = req.user;
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                err: "unable to delete user"
            })
        }

        res.json({
            message: "User deleted successfully"
        })
    })
}

export const updateUser = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtentions = true

    form.parse(req, (err, fields, file) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: "problem with Image"
            })
        }


        // Updation code
        let user = req.user;
        user = _.extend(user, fields)

        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    err: "Image Size exceed than 3MB"
                })
            }

            user.photo.data = fs.readFileSync(file.photo.filepath)
            user.photo.contentType = file.photo.type
        }


        user.save((err, userr) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    err: "Updation failed in DB"
                })
            }
            res.json({ userr })
        })
    })
}