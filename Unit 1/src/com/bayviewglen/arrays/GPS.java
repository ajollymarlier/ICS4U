package com.bayviewglen.arrays;

import java.awt.geom.Point2D;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class GPS {
	public static void main(String[] args) {
		Point2D[] points = loadFile();
		checkClose(points);
		
		//TODO for testing only
		/*for(Point2D p : points) {
			System.out.println(p.getX() + " " + p.getY());
		}*/

	}

	private static void checkClose(Point2D[] points) {
		Point2D[] closestPoints = new Point2D[2];
		Double smallestDistance = Double.MAX_VALUE;
		
		for(int i = 0; i < points.length - 1; i++) {
			for(int j = i + 1; j < points.length; j++) {
				Double distance = findDistance(points, i, j);
				if(distance < smallestDistance) {
					smallestDistance = distance;
					closestPoints[0] = points[i];
					closestPoints[1] = points[j];
				}
			}
		}
		
		System.out.print("(" + closestPoints[0].getX() + ", " + closestPoints[0].getY() + ")");
		System.out.println("(" + closestPoints[1].getX() + ", " + closestPoints[1].getY() + ")");
		
	}

	private static Double findDistance(Point2D[] points, int i, int j) {
		//i getting arrayOutOfBounds
		double xDistance = Math.abs(points[j].getX() - points[i].getX());
		double yDistance = Math.abs(points[j].getY() - points[i].getY());
		
		return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
	}

	private static Point2D[] loadFile() {
		Point2D[] points = null;
		
		try {
			Scanner scanner = new Scanner(new File("data/points.dat"));
			int numPoints = scanner.nextInt();
			points = new Point2D[numPoints];
			
			for(int i = 0; i < numPoints; i++) {
				points[i] = new Point2D.Double(scanner.nextDouble(), scanner.nextDouble());
			}
			scanner.close();
			
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
		
		return points;
	}

}
