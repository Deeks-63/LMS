import Leave from "../models/leave.js"

export const getAllLeaves = (req, res) => {
    Leave.find((err, leaves) => {
        if (err) {
            return res.status(400).json({
                error: "No Leaves found"
            })
        }
        res.json(leaves)
    })
}
export const getAllLeavesApprovedDenied = (req, res) => {
    Leave.find({ $or: [{ "status": "Approved" }, { "denied": true }] }, (err, leavess) => {
        if (err) {
            return res.status(400).json({
                error: "No Leaves found"
            })
        }
        res.json(leavess)
            // if (leavess.approved == true) {
            //     // res.json(leavess)
            //     console.log("inside come ")
            // }

    })
}
export const getLeaveByRollId = (req, res, next) => {
    Leave.findById(idno).exec((err, leavee) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: " No Leave was found in DB"
            })
        }
        res.json(leavee)
    })
}

export const PrintRollIdLeaves = (req,res)=>{
  Leave.find({ "idno": req.params.rollid }, (err, leavess) => {
      if (err) {
          return res.status(400).json({
              error: "No Leaves found with this Roll Id"
          })
      }
      res.json(leavess)
  })
}

export const getLeaveById = (req, res, next, id) => {
    Leave.findById(id).exec((err, leavee) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: " No Leave was found in DB"
            })
        }
        req.leaveProfile = leavee;
        next();
    })
}

export const getAllLeavesDenied = (req, res) => {
    Leave.find({ "status": "Denied" }, (err, leavess) => {
        if (err) {
            return res.status(400).json({
                error: "No Denied Leaves found"
            })
        }
        res.json(leavess)
            // if (leavess.approved == true) {
            //     // res.json(leavess)
            //     console.log("inside come ")
            // }

    })
}

export const getAllLeavesPending = (req, res) => {
    Leave.find({ "status": "Pending" }, (err, leavess) => {
        if (err) {
            return res.status(400).json({
                error: "No Pending Leaves found"
            })
        }
        res.json(leavess)
            // if (leavess.approved == true) {
            //     // res.json(leavess)
            //     console.log("inside come ")
            // }

    })
}

export const createLeave = (req, res) => {
    const leave = Leave(req.body);
    leave.save((err, leavee) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: "not able to save leave"
            })
        }
        res.send({
            idno: leavee.idno,
            name: leavee.name,
            email: leavee.email,
            status: leavee.status,
            id: leavee._id
        })
    })
}

export const updateLeave = (req, res) => {
  // console.log(req);
    Leave.findByIdAndUpdate({ _id: req.leaveProfile._id }, { $set: req.body }, { new: true, userFindAndModify: false },
        (err, leavee) => {
            if (err) {
                res.status(400).json({
                    err: "You are Not authorised to update the User"
                })
            }
            res.json(leavee)
        })
}


export const deleteLeave = (req, res) => {
    const leave = req.leave;
    leave.remove((err, deletedLeave) => {
        if (err) {
            return res.status(400).json({
                err: "unable to delete Leave"
            })
        }

        res.json({
            message: "Leave deleted successfully"
        })
    })
}

export const getLeaveCreateById = (req, res, next, id) => {
    Leave.findById(id).exec((err, leave) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err: " No leave was found in DB"
            })
        }
        req.leave = leave;
        next();
    })
}
