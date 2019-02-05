package k_5kyu.HumanReadableTime;


public class HumanReadableTime {

    public static String makeReadable(int seconds) {

        int h = seconds / 3600;
        int min = seconds / 60 % 60;
        int sec = seconds % 60;

        return String.format("%02d:%02d:%02d", h, min, sec);
    }
}