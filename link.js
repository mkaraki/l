function query(sid)
{
    switch (sid)
    {
        case "":
            location.href = "https://mkaraki.app";
            break;
        case "idiot":
            location.href = "https://mkaraki.app/youareanidiot";
            break;
        case "ghuser":
            location.href = "https://github.com/mkaraki";
            break;
	case "qs":
	    location.href = "https://download.teamviewer.com/download/TeamViewerQS.exe";
	    break;

        default:
            return false;
    }

    return true;
}