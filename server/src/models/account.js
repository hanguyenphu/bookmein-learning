const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email!");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error('Password cannot contain "password');
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("Invalid phone number");
            }
        }
    },
    verified: {
        type: Boolean,
        default: false
    },
    activate: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            const roleArray = ["admin", "user"];
            if (!roleArray.includes(value)) {
                throw new Error("Invalid role");
            }
        }
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

//hash password before saving
accountSchema.pre("save", async function(next) {
    const account = this;

    if (account.isModified("password")) {
        account.password = await bcrypt.hash(account.password, 8);
    }

    next();
});

accountSchema.methods.generateAuthToken = async function() {
    const account = this;
    const token = jwt.sign({ _id: account._id.toString() }, 'bookmein_salon');

    account.tokens = account.tokens.concat({ token });

    await account.save();

    return token;
};

accountSchema.statics.findByCredential = async (email, password) => {
    const account = await Account.findOne({email})
    if(!account) {
        throw new Error('Email or Password is incorrect')
    }
    const isMatch = await bcrypt.compare(password, account.password)

    if(!isMatch) {
        throw new Error ('Email or Password is incorrect')
    }

    return account
}

//hide private info from user
accountSchema.methods.toJSON = function() {
    const account = this;
    const accountObject = account.toObject();

    delete accountObject.password;
    delete accountObject.tokens;

    return accountObject;
};

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
