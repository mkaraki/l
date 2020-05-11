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
        case "timer":
            location.href = "https://mkaraki.app/MultiClock/timer.html";
            break;
        case "ghuser":
            location.href = "https://github.com/mkaraki";
            break;
        case "callnow":
        case "call":
            location.href = "https://mkaraki.app/callnow/";
            break;
        case "domain":
        case "domaindb":
            location.href = "https://mkaraki.app/domaindb/index.html";
            break;

        default:
            return false;
    }

    return true;
}
