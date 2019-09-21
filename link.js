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
        case "clock":
            location.href = "https://mkaraki.app/MultiClock";
            break;
        case "ghuser":
            location.href = "https://github.com/mkaraki";
            break;

        default:
            return false;
    }

    return true;
}
