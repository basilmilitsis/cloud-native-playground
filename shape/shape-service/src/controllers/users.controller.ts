import * as Express from "express";

const create = async (req: Express.Request, res: Express.Response) => {
    try {
        // const { firstName, lastName } = req.body;
        // const user = new User({ firstName, lastName});

        // await user.save();

        // res.json({
        //     data: user
        // });

    } catch(error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}

const findAll = async (req: Express.Request, res: Express.Response) => {
    try {
        // const users = await User.findAll();
        // console.log('PRINT AGAIN');
        // res.json({
        //     data: users
        // })
        console.log("shape-service - findAll");
        res.json({
            data: "AHA"
        })

    } catch(error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}

const findById = async (req: Express.Request, res: Express.Response) => {
    try {
        // const user = await User.findOne({
        //     where: {
        //         id: req.params.id
        //     }
        // });

        // res.json({
        //     data: user
        // })
    } catch(error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

export default {
    findAll,
    findById,
    create
}