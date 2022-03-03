package org.generation.QuickTrip.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHAUtil {
	public static String salt="minionsCH7";
	public static String createHash(String value) {
		String res = value+salt;
		try {
			 MessageDigest md = MessageDigest.getInstance("SHA-256");
			 md.update(value.getBytes());
			 byte[] resultado = md.digest();
			 int max = resultado.length;
	         String tmp;
	         res ="";
	         for (int i=0; i<max; i++) {
	             tmp = Integer.toHexString(0xFF & resultado[i]);
	             res += (tmp.length()<2)?0+tmp:tmp;
	         }// for i
        } catch(NoSuchAlgorithmException e) {
            e.printStackTrace();
        }//catch
		return res;
	}//crateHash
	
	public static boolean verifyHash(String original, String hash) {
		String res = createHash(original);
		return res.equals(hash);
	}
	
	public static boolean verifyPasswd(String original, String newPassd) {
		return createHash(original).equals(createHash(newPassd));
	}
}//class SHAUtil
