export default interface PrimaryInputProps {
    loading?: boolean;
    disabled?: boolean;
    type?: 'password' | 'text';
    placeholder: string;
    value: string;
    onChange(event: any): void;
}