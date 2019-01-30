package k_6kyu.FindTheMissingLetter;

import org.junit.Test;

import static org.junit.Assert.*;

public class FindTheMissingLetterTest {

    @Test
    public void findMissingLetter() {
        assertEquals('e', FindTheMissingLetter.findMissingLetter(new char[] { 'a','b','c','d','f' }));
        assertEquals('P', FindTheMissingLetter.findMissingLetter(new char[] { 'O','Q','R','S' }));
    }

}