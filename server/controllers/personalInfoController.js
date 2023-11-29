var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiError } from '../middlewares/errors/ApiError';
import personalInfoServices from '../services/personalInfoServices';
// Method 1: Get all personal information
export const getAllPersonalInfo = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userList = yield personalInfoServices.findAll();
    if (userList.length < 1) {
        next(ApiError.resourceNotFound('Person info not found'));
        return;
    }
    res.status(200).json(userList);
});
// Method 2: Get a single person's information by ID
export const getPersonalInfoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const index = req.params.id;
    const info = yield personalInfoServices.findOne(index);
    if (!info) {
        next(ApiError.resourceNotFound('Person info not found'));
        return;
    }
    res.status(200).json(info);
});
// Method 3: Add personal info
export const addPersonalInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newInfo = req.body;
    const info = yield personalInfoServices.createOne(newInfo);
    if (!info) {
        next(ApiError.badRequest('Not a valid data'));
        return;
    }
    res.status(201).json(info);
});
// Method 4: Update personal info
export const updatePersonalInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const index = req.params.id;
    const updatedInfo = req.body;
    const info = yield personalInfoServices.updateOne(index, updatedInfo);
    if (!info) {
        next(ApiError.resourceNotFound('Info not found'));
        return;
    }
    res.status(200).json(info);
});
// 5.Delete
export const deletePersonalInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const index = req.params.id;
    const foundIndex = yield personalInfoServices.removeOne(index);
    if (foundIndex === null) {
        next(ApiError.resourceNotFound('Info not found'));
        return;
    }
    res.status(200).json({ msg: `Successfully Deleted info with id: ${index}` });
});
