package frc.robot.util;

import com.acmerobotics.roadrunner.trajectory.constraints.DriveConstraints;

import frc.robot.controllers.RobotController;
import frc.robot.controllers.VisionAllignment;

public class Context {
    //----- Drivetrain Values -----
    public static final int leftMotor1ID = 1;
    public static final int leftMotor2ID = 2;
    public static final int rightMotor1ID = 3;
    public static final int rightMotor2ID = 4;

    // Diameter of wheel (10 cm) * Pi (3.14) * Clicks per rev (0.2)
    public static final double driveClickToCm = 2*Math.PI;
    
    //----- Human Input Device Values -----
    public static final int joystickID = 0;
    public static final int throttleAxisID = 1;
    public static final int yawAxisID = 5;
    public static final double joystickMaxDeadband = 0.05;
    public static final int inUseLengthMillis = 3000;

    //----- Robotcontroller Static Reference -----
    public static RobotController robotController;

    //----- Vision Alignment System -----
    public static VisionAllignment visionAllignment = new VisionAllignment();
    // ^^ Constants ^^
    public static final double alignmentTimeout = 3000; //after how many milliseconds stop the alignment loop and abort
    public static final double alignmentThreshold = 0.5; //within how many degrees can we say "good enough" aligning the robot

    public static final double maxTurnPower = 1.0; // SAFETY

    //----- Acme Robotics Tank Drive -----
    // maxVel, maxAccel, maxJerk, maxAngVel, maxAngAccel, maxAngJerk
    public static final DriveConstraints BASE_CONSTRAINTS = new DriveConstraints(
        20.0, 40.0, 80.0, 1.0, 2.0, 4.0
    );
    public static final double TRACK_WIDTH = 5;
    public static final double kA = 5;
    public static final double kStatic = 5;
    public static final double kV = 5;

    //----- Time Function -----
    public static double getRelativeTime(double relativePoint) {
        return System.currentTimeMillis() - relativePoint;
    }
}