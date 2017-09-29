package com.bayviewglen.fun;

import java.awt.Toolkit;
import java.util.Random;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class VirusBoiz {

	public static void main(String[] args) throws InterruptedException {
		//TODO dont run this unless you want to kill your CPU
		long beepCount = System.currentTimeMillis();
		
		while(true ){
			if(System.currentTimeMillis() - beepCount > 100) {
				Toolkit.getDefaultToolkit().beep();
				beepCount = System.currentTimeMillis();
			}
			
			/*JFrame frame = new JFrame();
			frame.setSize(100, 100);
			frame.setLocation(new Random().nextInt(), new Random().nextInt());
			frame.setVisible(true);*/
		}

	}

}
