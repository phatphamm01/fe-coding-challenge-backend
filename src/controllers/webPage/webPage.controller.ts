import handlerFactory from '@/utils/handlerFactory';

import { WebPageModel } from '@/models/webPage';

export const get = handlerFactory.getOne(WebPageModel, {});
export const getAll = handlerFactory.getAll(WebPageModel);
export const create = handlerFactory.createOne(WebPageModel);
export const deleteById = handlerFactory.deleteOne(WebPageModel);
export const update = handlerFactory.updateOne(WebPageModel);
