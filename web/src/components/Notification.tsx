import NotificationProps from '../models/NotificationProps';

const Notification = ({ text, style='is-danger' }: NotificationProps) => {
    return (
        <div className={`notification ${style} is-light`}>
            {text}
        </div>
    );
}

export default Notification;