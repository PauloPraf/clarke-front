import React from "react";
import TableStatusLoading from "./TableStatusLoading";
import TableStatusError from "./TableStatusError";

type Props = {
    children: React.ReactNode;
    error?: string;
    isLoading?: boolean;
    onTryAgain?: () => void;
};

function TableStatus({
                         error,
                         isLoading,
                         onTryAgain,
                         children,
                     }: Props): JSX.Element {
    switch (true) {
        case isLoading:
            return <TableStatusLoading/>;
        case error !== undefined:
            return <TableStatusError onTryAgain={onTryAgain} error={error}/>;
        default:
            return <>{children}</>;
    }
}

export default TableStatus;
