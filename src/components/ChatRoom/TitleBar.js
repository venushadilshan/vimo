import ProfileIcon from "./ProfileIcon";

const TitleBar = () => {
    return (
    <div className="flex flex-row w-full bg-gray-800 items-center fixed">
        <ProfileIcon/>
        <h1 className="text-lg text-slate-50 p-2">Venusha Dilshan</h1>
    </div>);
}

export default TitleBar;