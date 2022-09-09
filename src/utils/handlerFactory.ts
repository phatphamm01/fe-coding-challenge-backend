import AppError from './AppError.utils';
import catchAsync from './catchAsync';

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('ID không tồn tại!!', 404));
    }

    res.status(204).json({
      success: true,
      data: null
    });
  });

const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('ID không tồn tại!!', 404));
    }

    res.status(200).json({
      success: true,
      data: doc
    });
  });

const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      success: true,
      data: doc
    });
  });

const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError('ID không tồn tại!!', 404));
    }

    res.status(200).json({
      success: true,
      data: doc
    });
  });

const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let query = Model.find();

    const doc = await query;

    res.status(200).json({
      success: true,
      data: doc
    });
  });

const handlerFactory = { getOne, getAll, createOne, updateOne, deleteOne };
export default handlerFactory;
