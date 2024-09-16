import { getInitials } from "../utills/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100">
        {getInitials("Aweesha Thavishank")}
      </div>
      <div>
        <p className="text-sm font-medium ">Aweesha Thavishank</p>
        <button className="text-sm underline text-slate-700" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
