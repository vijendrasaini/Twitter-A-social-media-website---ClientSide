import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const iconsArr = [
    {
        title : "Home",
        Icon : HomeIcon,
        link : "/home"
    },
    {
        title : "Explore",
        Icon : ExploreIcon,
        link : "/explore"
    },
    {
        title : "Notifications",
        Icon : NotificationsNoneIcon,
        link : "/notifications"
    },
    {
        title : "Messages",
        Icon : MailOutlineIcon,
        link : "/messages"
    },
    {
        title : "Bookmarks",
        Icon : BookmarkBorderIcon,
        link : "/bookmarks"
    },
    {
        title : "Lists",
        Icon : ListAltIcon,
        link : "/lists"
    },
    {
        title : "Profile",
        Icon : PermIdentityIcon,
        link : `/${JSON.parse(localStorage.getItem('user')).username}`
    },
    {
        title : "More",
        Icon : MoreHorizIcon,
        link : "/more"
    }
]