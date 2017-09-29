package com.bayviewglen.fun;

import java.awt.GridLayout;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Reminder {

	public static void main(String[] args) throws InterruptedException {
		/*long time = System.currentTimeMillis();
		while(true) {
			if(System.currentTimeMillis() - time == 1800000) {
				window();
			}
		}*/
		
		while(true) {
			window();
			Thread.sleep(600000);
		}
		

	}

	private static void window() {
		JFrame frame = new JFrame();
		frame.setSize(200, 200);
		frame.add(new JPanel(new GridLayout()).add(new JLabel("Watch Aashiqui")));
		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
	}

}
