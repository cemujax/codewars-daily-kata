package k_7kyu.TwoToOne;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TwoToOneTest {

    @Test
    public void longest() {
        assertEquals("aehrsty", TwoToOne.longest("aretheyhere", "yestheyarehere"));
        assertEquals("abcdefghilnoprstu", TwoToOne.longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
        assertEquals("acefghilmnoprstuy", TwoToOne.longest("inmanylanguages", "theresapairoffunctions"));
    }
}