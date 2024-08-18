import {AxiosError} from "axios";

function axiosErrorToString(
    error: unknown,
    unknownError = "Erro desconhecido"
): string {
    if (error instanceof AxiosError) {
        return error?.response?.data["message"];
    }

    return unknownError;
}

export default axiosErrorToString;
