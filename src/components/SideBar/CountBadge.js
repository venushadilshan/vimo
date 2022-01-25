const CountBadge = (props) => {
    if (props.unreadCount == "0") {
        return null;
    }
    else {
        return (
            <div className="flex flex-col bg-blue-500 px-1  rounded-full mr-2 text-sm text-slate-50">{props.unreadCount}</div>);
    }
}

export default CountBadge;