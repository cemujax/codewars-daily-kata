package k_6kyu.FormatWordsIntoASentence;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Kata {

    public static String formatWords(String[] words) {

        if (words == null || words.length == 0) return "";

        List<String> valuedWords = Arrays.stream(words)
                .filter(a -> a != "")
                .collect(Collectors.toList());

        if (valuedWords.isEmpty()) return "";

        int lastIndex = valuedWords.size() - 1;
        String result = String.join(", ", valuedWords.subList(0, lastIndex));
        if(valuedWords.size() > 1) {
            result += " and " + valuedWords.get(lastIndex);
        }else {
            result = valuedWords.get(lastIndex);
        }

        return result;
    }

}