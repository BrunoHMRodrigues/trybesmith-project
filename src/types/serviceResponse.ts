// const SUCCESS = 200;
// const CREATED = 201;
// const NOT_FOUND = 400;
// const INVALID = 401;
// const USER_NOT_FOUND = 404;
// const RULE_INVALID = 422;

export type ServiceResponseErrorType = 'NOT_FOUND' | 'INVALID' | 'USER_NOT_FOUND' | 'RULE_INVALID';
export type ServiceResponseSuccessType = 'SUCCESS' | 'CREATED';

type ServiceReponseError = {
  status: ServiceResponseErrorType,
  data: {
    message: string
  },
};

type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType,
  data: T,
};

export type ServiceResponse<T> = ServiceReponseError | ServiceResponseSuccess<T>;