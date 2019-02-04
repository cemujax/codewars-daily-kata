package k_6kyu.MexicanWave;

import java.util.stream.IntStream;

public class MexicanWave {

    public static String[] wave(String str) {

        String[] result = IntStream.range(0, str.length())
                .mapToObj(n ->
                        str.substring(0, n) + Character.toUpperCase(str.charAt(n)) + str.substring(n + 1)
                )
                .filter(a -> !a.equals(str))
                .toArray(String[]::new);

        return result;
    }
}
