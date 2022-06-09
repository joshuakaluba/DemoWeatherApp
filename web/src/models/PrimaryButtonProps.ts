export default interface PrimaryButtonProps {
    loading?: boolean;
    disabled?: boolean;
    text: string;
    onClick(): void;
}