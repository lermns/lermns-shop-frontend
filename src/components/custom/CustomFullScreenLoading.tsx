interface Props {
    title?: string;
}

export const CustomFullScreenLoading = ({ title }: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex  flex-col items-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="text-lg font-medium">{title ? `${title}` : `Espere un momento...`}</p>
            </div>
        </div>
    );
};