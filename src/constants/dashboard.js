import {
    FaClipboardList,
    FaBriefcase,
    FaCalendarCheck,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

export const DASHBOARD_STATS = [
    {
        key: "applications",
        title: "Applications",
        icon: FaClipboardList,
        description: "Total applications",
    },
    {
        key: "applied",
        title: "Applied",
        icon: FaBriefcase,
        description: "Applications submitted",
    },
    {
        key: "interviews",
        title: "Interviews",
        icon: FaCalendarCheck,
        description: "Interview stage",
    },
    {
        key: "offers",
        title: "Offers",
        icon: FaCheckCircle,
        description: "Offers received",
    },
    {
        key: "rejections",
        title: "Rejected",
        icon: FaTimesCircle,
        description: "Applications declined",
    },
];