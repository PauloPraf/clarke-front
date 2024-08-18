import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import FormLoading from "./FormLoading";
import FormError from "./FormError";

type Props = {
    children: JSX.Element;
};

// Isto é usado para que o estado assíncrono seja carregado antes de renderizar o componente.
// Principalmente com o o uso do Recoil.
function AsyncFormContainer({children}: Props) {
    return (
        <ErrorBoundary
            fallback={<FormError error={"Ocorreu um erro ao enviar o formulário"}/>}
        >
            <Suspense fallback={<FormLoading/>}>{children}</Suspense>
        </ErrorBoundary>
    );
}

export default AsyncFormContainer;
