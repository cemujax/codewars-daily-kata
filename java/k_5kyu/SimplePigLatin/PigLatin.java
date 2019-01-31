package k_5kyu.SimplePigLatin;

import java.util.Arrays;
import java.util.stream.Collectors;

public class PigLatin {

    public static String pigIt(String str) {

        final String ADD_STRING = "ay";
        String result = Arrays.stream(str.split(" "))
                .map(s -> {
                    if(s.matches("^[a-zA-Z]+$")) {
                        return s.substring(1) + s.substring(0, 1) + ADD_STRING;
                    }
                    return s;
                })
                .collect(Collectors.joining(" "));

        return result;
    }
}