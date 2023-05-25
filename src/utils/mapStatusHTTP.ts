import { ServiceResponseErrorType, ServiceResponseSuccessType } from '../types/serviceResponse';

function mapStatusHTTP(
  type: ServiceResponseErrorType | ServiceResponseSuccessType,
): number {
  const statusHTTPMap: Record<ServiceResponseErrorType | ServiceResponseSuccessType, number> = {
    NOT_FOUND: 400,
    INVALID: 401,
    USER_NOT_FOUND: 404,
    RULE_INVALID: 422,
    SUCCESS: 200,
    CREATED: 201,
  };

  return statusHTTPMap[type] || 500;
}

export default mapStatusHTTP;