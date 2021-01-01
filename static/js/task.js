/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// these are the pages to be loaded

var pages = [
	"instructions/disclaimer.html",
	 "instructions/instruct-0.html",
	 "instructions/instruct-1.html",
	 "instructions/instruct-2.html",
	 "instructions/instruct-3.html",
	 "instructions/instruct-4.html",
	 "instructions/instruct-5.html",
	 "instructions/instruct-6.html",
	 "instructions/instruct-7.html",
	"instructions/instruct-ready.html",
	"stage.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ 
	"instructions/disclaimer.html",
	 "instructions/instruct-0.html",
	 "instructions/instruct-1.html",
	 "instructions/instruct-2.html",
	 "instructions/instruct-3.html",
	 "instructions/instruct-4.html",
	 "instructions/instruct-5.html",
	 "instructions/instruct-6.html",
	"instructions/instruct-7.html",	
	"instructions/instruct-ready.html"
];

var randomimageset = ["static/images/scrambled1a.jpg", "static/images/scrambled1b.jpg", "static/images/scrambled1c.jpg", "static/images/scrambled1d.jpg", "static/images/scrambled2a.jpg", "static/images/scrambled2b.jpg", "static/images/scrambled2c.jpg", "static/images/scrambled2d.jpg", "static/images/scrambled3a.jpg", "static/images/scrambled3b.jpg", "static/images/scrambled3c.jpg", "static/images/scrambled3d.jpg", "static/images/scrambled4a.jpg", "static/images/scrambled4b.jpg", "static/images/scrambled4c.jpg", "static/images/scrambled4d.jpg"]
// var randomimageset = ["static/images/scrambled35.jpg",  "static/images/scrambled580.jpg",  "static/images/scrambled21.jpg",  "static/images/scrambled594.jpg",  "static/images/scrambled1009.jpg",  "static/images/scrambled1021.jpg",  "static/images/scrambled1035.jpg",  "static/images/scrambled543.jpg",  "static/images/scrambled225.jpg",  "static/images/scrambled231.jpg",  "static/images/scrambled557.jpg",  "static/images/scrambled219.jpg",  "static/images/scrambled782.jpg",  "static/images/scrambled796.jpg",  "static/images/scrambled966.jpg",  "static/images/scrambled972.jpg",  "static/images/scrambled741.jpg",  "static/images/scrambled999.jpg",  "static/images/scrambled755.jpg",  "static/images/scrambled769.jpg",  "static/images/scrambled190.jpg",  "static/images/scrambled184.jpg",  "static/images/scrambled812.jpg",  "static/images/scrambled806.jpg",  "static/images/scrambled153.jpg",  "static/images/scrambled635.jpg",  "static/images/scrambled621.jpg",  "static/images/scrambled147.jpg",  "static/images/scrambled609.jpg",  "static/images/scrambled1169.jpg",  "static/images/scrambled392.jpg",  "static/images/scrambled386.jpg",  "static/images/scrambled1155.jpg",  "static/images/scrambled1141.jpg",  "static/images/scrambled437.jpg",  "static/images/scrambled351.jpg",  "static/images/scrambled345.jpg",  "static/images/scrambled423.jpg",  "static/images/scrambled1196.jpg",  "static/images/scrambled379.jpg",  "static/images/scrambled1182.jpg",  "static/images/scrambled378.jpg",  "static/images/scrambled1183.jpg",  "static/images/scrambled1197.jpg",  "static/images/scrambled344.jpg",  "static/images/scrambled422.jpg",  "static/images/scrambled436.jpg",  "static/images/scrambled350.jpg",  "static/images/scrambled1140.jpg",  "static/images/scrambled1154.jpg",  "static/images/scrambled387.jpg",  "static/images/scrambled1168.jpg",  "static/images/scrambled393.jpg",  "static/images/scrambled608.jpg",  "static/images/scrambled620.jpg",  "static/images/scrambled146.jpg",  "static/images/scrambled152.jpg",  "static/images/scrambled634.jpg",  "static/images/scrambled807.jpg",  "static/images/scrambled813.jpg",  "static/images/scrambled185.jpg",  "static/images/scrambled191.jpg",  "static/images/scrambled768.jpg",  "static/images/scrambled754.jpg",  "static/images/scrambled998.jpg",  "static/images/scrambled740.jpg",  "static/images/scrambled973.jpg",  "static/images/scrambled967.jpg",  "static/images/scrambled797.jpg",  "static/images/scrambled783.jpg",  "static/images/scrambled218.jpg",  "static/images/scrambled230.jpg",  "static/images/scrambled556.jpg",  "static/images/scrambled542.jpg",  "static/images/scrambled224.jpg",  "static/images/scrambled1034.jpg",  "static/images/scrambled1020.jpg",  "static/images/scrambled1008.jpg",  "static/images/scrambled595.jpg",  "static/images/scrambled20.jpg",  "static/images/scrambled581.jpg",  "static/images/scrambled34.jpg",  "static/images/scrambled22.jpg",  "static/images/scrambled597.jpg",  "static/images/scrambled36.jpg",  "static/images/scrambled583.jpg",  "static/images/scrambled1036.jpg",  "static/images/scrambled1022.jpg",  "static/images/scrambled554.jpg",  "static/images/scrambled232.jpg",  "static/images/scrambled226.jpg",  "static/images/scrambled540.jpg",  "static/images/scrambled568.jpg",  "static/images/scrambled795.jpg",  "static/images/scrambled959.jpg",  "static/images/scrambled781.jpg",  "static/images/scrambled971.jpg",  "static/images/scrambled965.jpg",  "static/images/scrambled756.jpg",  "static/images/scrambled742.jpg",  "static/images/scrambled187.jpg",  "static/images/scrambled839.jpg",  "static/images/scrambled193.jpg",  "static/images/scrambled805.jpg",  "static/images/scrambled811.jpg",  "static/images/scrambled144.jpg",  "static/images/scrambled622.jpg",  "static/images/scrambled636.jpg",  "static/images/scrambled150.jpg",  "static/images/scrambled178.jpg",  "static/images/scrambled385.jpg",  "static/images/scrambled391.jpg",  "static/images/scrambled1142.jpg",  "static/images/scrambled1156.jpg",  "static/images/scrambled420.jpg",  "static/images/scrambled346.jpg",  "static/images/scrambled352.jpg",  "static/images/scrambled434.jpg",  "static/images/scrambled1181.jpg",  "static/images/scrambled408.jpg",  "static/images/scrambled1195.jpg",  "static/images/scrambled1194.jpg",  "static/images/scrambled409.jpg",  "static/images/scrambled1180.jpg",  "static/images/scrambled353.jpg",  "static/images/scrambled435.jpg",  "static/images/scrambled421.jpg",  "static/images/scrambled347.jpg",  "static/images/scrambled1157.jpg",  "static/images/scrambled1143.jpg",  "static/images/scrambled390.jpg",  "static/images/scrambled384.jpg",  "static/images/scrambled179.jpg",  "static/images/scrambled637.jpg",  "static/images/scrambled151.jpg",  "static/images/scrambled145.jpg",  "static/images/scrambled623.jpg",  "static/images/scrambled810.jpg",  "static/images/scrambled804.jpg",  "static/images/scrambled192.jpg",  "static/images/scrambled186.jpg",  "static/images/scrambled838.jpg",  "static/images/scrambled743.jpg",  "static/images/scrambled757.jpg",  "static/images/scrambled964.jpg",  "static/images/scrambled970.jpg",  "static/images/scrambled780.jpg",  "static/images/scrambled958.jpg",  "static/images/scrambled794.jpg",  "static/images/scrambled569.jpg",  "static/images/scrambled227.jpg",  "static/images/scrambled541.jpg",  "static/images/scrambled555.jpg",  "static/images/scrambled233.jpg",  "static/images/scrambled1023.jpg",  "static/images/scrambled1037.jpg",  "static/images/scrambled582.jpg",  "static/images/scrambled37.jpg",  "static/images/scrambled596.jpg",  "static/images/scrambled23.jpg",  "static/images/scrambled1033.jpg",  "static/images/scrambled1027.jpg",  "static/images/scrambled592.jpg",  "static/images/scrambled27.jpg",  "static/images/scrambled586.jpg",  "static/images/scrambled33.jpg",  "static/images/scrambled579.jpg",  "static/images/scrambled237.jpg",  "static/images/scrambled551.jpg",  "static/images/scrambled545.jpg",  "static/images/scrambled223.jpg",  "static/images/scrambled974.jpg",  "static/images/scrambled960.jpg",  "static/images/scrambled948.jpg",  "static/images/scrambled790.jpg",  "static/images/scrambled784.jpg",  "static/images/scrambled753.jpg",  "static/images/scrambled747.jpg",  "static/images/scrambled800.jpg",  "static/images/scrambled814.jpg",  "static/images/scrambled182.jpg",  "static/images/scrambled196.jpg",  "static/images/scrambled828.jpg",  "static/images/scrambled169.jpg",  "static/images/scrambled627.jpg",  "static/images/scrambled141.jpg",  "static/images/scrambled155.jpg",  "static/images/scrambled633.jpg",  "static/images/scrambled1147.jpg",  "static/images/scrambled1153.jpg",  "static/images/scrambled380.jpg",  "static/images/scrambled394.jpg",  "static/images/scrambled419.jpg",  "static/images/scrambled1184.jpg",  "static/images/scrambled1190.jpg",  "static/images/scrambled343.jpg",  "static/images/scrambled425.jpg",  "static/images/scrambled431.jpg",  "static/images/scrambled357.jpg",  "static/images/scrambled430.jpg",  "static/images/scrambled356.jpg",  "static/images/scrambled342.jpg",  "static/images/scrambled424.jpg",  "static/images/scrambled1191.jpg",  "static/images/scrambled1185.jpg",  "static/images/scrambled418.jpg",  "static/images/scrambled395.jpg",  "static/images/scrambled381.jpg",  "static/images/scrambled1152.jpg",  "static/images/scrambled1146.jpg",  "static/images/scrambled154.jpg",  "static/images/scrambled632.jpg",  "static/images/scrambled626.jpg",  "static/images/scrambled140.jpg",  "static/images/scrambled168.jpg",  "static/images/scrambled197.jpg",  "static/images/scrambled829.jpg",  "static/images/scrambled183.jpg",  "static/images/scrambled815.jpg",  "static/images/scrambled801.jpg",  "static/images/scrambled746.jpg",  "static/images/scrambled752.jpg",  "static/images/scrambled785.jpg",  "static/images/scrambled791.jpg",  "static/images/scrambled949.jpg",  "static/images/scrambled961.jpg",  "static/images/scrambled975.jpg",  "static/images/scrambled544.jpg",  "static/images/scrambled222.jpg",  "static/images/scrambled236.jpg",  "static/images/scrambled550.jpg",  "static/images/scrambled578.jpg",  "static/images/scrambled32.jpg",  "static/images/scrambled587.jpg",  "static/images/scrambled26.jpg",  "static/images/scrambled593.jpg",  "static/images/scrambled1026.jpg",  "static/images/scrambled1032.jpg",  "static/images/scrambled1024.jpg",  "static/images/scrambled18.jpg",  "static/images/scrambled1030.jpg",  "static/images/scrambled585.jpg",  "static/images/scrambled30.jpg",  "static/images/scrambled1018.jpg",  "static/images/scrambled591.jpg",  "static/images/scrambled24.jpg",  "static/images/scrambled208.jpg",  "static/images/scrambled220.jpg",  "static/images/scrambled546.jpg",  "static/images/scrambled552.jpg",  "static/images/scrambled234.jpg",  "static/images/scrambled963.jpg",  "static/images/scrambled977.jpg",  "static/images/scrambled787.jpg",  "static/images/scrambled793.jpg",  "static/images/scrambled778.jpg",  "static/images/scrambled744.jpg",  "static/images/scrambled750.jpg",  "static/images/scrambled988.jpg",  "static/images/scrambled817.jpg",  "static/images/scrambled803.jpg",  "static/images/scrambled195.jpg",  "static/images/scrambled181.jpg",  "static/images/scrambled618.jpg",  "static/images/scrambled630.jpg",  "static/images/scrambled156.jpg",  "static/images/scrambled142.jpg",  "static/images/scrambled624.jpg",  "static/images/scrambled1150.jpg",  "static/images/scrambled1144.jpg",  "static/images/scrambled397.jpg",  "static/images/scrambled1178.jpg",  "static/images/scrambled383.jpg",  "static/images/scrambled368.jpg",  "static/images/scrambled1193.jpg",  "static/images/scrambled1187.jpg",  "static/images/scrambled354.jpg",  "static/images/scrambled432.jpg",  "static/images/scrambled426.jpg",  "static/images/scrambled340.jpg",  "static/images/scrambled427.jpg",  "static/images/scrambled341.jpg",  "static/images/scrambled355.jpg",  "static/images/scrambled433.jpg",  "static/images/scrambled1186.jpg",  "static/images/scrambled369.jpg",  "static/images/scrambled1192.jpg",  "static/images/scrambled1179.jpg",  "static/images/scrambled382.jpg",  "static/images/scrambled396.jpg",  "static/images/scrambled1145.jpg",  "static/images/scrambled1151.jpg",  "static/images/scrambled143.jpg",  "static/images/scrambled625.jpg",  "static/images/scrambled631.jpg",  "static/images/scrambled157.jpg",  "static/images/scrambled619.jpg",  "static/images/scrambled180.jpg",  "static/images/scrambled194.jpg",  "static/images/scrambled802.jpg"]
// var randomimageset2 = ["static/images/scrambled816.jpg",  "static/images/scrambled989.jpg",  "static/images/scrambled751.jpg",  "static/images/scrambled745.jpg",  "static/images/scrambled779.jpg",  "static/images/scrambled792.jpg",  "static/images/scrambled786.jpg",  "static/images/scrambled976.jpg",  "static/images/scrambled962.jpg",  "static/images/scrambled553.jpg",  "static/images/scrambled235.jpg",  "static/images/scrambled221.jpg",  "static/images/scrambled547.jpg",  "static/images/scrambled209.jpg",  "static/images/scrambled25.jpg",  "static/images/scrambled590.jpg",  "static/images/scrambled1019.jpg",  "static/images/scrambled31.jpg",  "static/images/scrambled584.jpg",  "static/images/scrambled1031.jpg",  "static/images/scrambled19.jpg",  "static/images/scrambled1025.jpg",  "static/images/scrambled285.jpg",  "static/images/scrambled56.jpg",  "static/images/scrambled42.jpg",  "static/images/scrambled291.jpg",  "static/images/scrambled1042.jpg",  "static/images/scrambled1056.jpg",  "static/images/scrambled246.jpg",  "static/images/scrambled95.jpg",  "static/images/scrambled520.jpg",  "static/images/scrambled81.jpg",  "static/images/scrambled534.jpg",  "static/images/scrambled252.jpg",  "static/images/scrambled1081.jpg",  "static/images/scrambled1095.jpg",  "static/images/scrambled508.jpg",  "static/images/scrambled939.jpg",  "static/images/scrambled905.jpg",  "static/images/scrambled911.jpg",  "static/images/scrambled722.jpg",  "static/images/scrambled736.jpg",  "static/images/scrambled695.jpg",  "static/images/scrambled681.jpg",  "static/images/scrambled859.jpg",  "static/images/scrambled871.jpg",  "static/images/scrambled865.jpg",  "static/images/scrambled656.jpg",  "static/images/scrambled130.jpg",  "static/images/scrambled124.jpg",  "static/images/scrambled642.jpg",  "static/images/scrambled118.jpg",  "static/images/scrambled497.jpg",  "static/images/scrambled483.jpg",  "static/images/scrambled1136.jpg",  "static/images/scrambled1122.jpg",  "static/images/scrambled332.jpg",  "static/images/scrambled454.jpg",  "static/images/scrambled440.jpg",  "static/images/scrambled326.jpg",  "static/images/scrambled468.jpg",  "static/images/scrambled469.jpg",  "static/images/scrambled441.jpg",  "static/images/scrambled327.jpg",  "static/images/scrambled333.jpg",  "static/images/scrambled455.jpg",  "static/images/scrambled1123.jpg",  "static/images/scrambled1137.jpg",  "static/images/scrambled482.jpg",  "static/images/scrambled496.jpg",  "static/images/scrambled119.jpg",  "static/images/scrambled125.jpg",  "static/images/scrambled643.jpg",  "static/images/scrambled657.jpg",  "static/images/scrambled131.jpg",  "static/images/scrambled864.jpg",  "static/images/scrambled870.jpg",  "static/images/scrambled858.jpg",  "static/images/scrambled680.jpg",  "static/images/scrambled694.jpg",  "static/images/scrambled737.jpg",  "static/images/scrambled723.jpg",  "static/images/scrambled910.jpg",  "static/images/scrambled904.jpg",  "static/images/scrambled938.jpg",  "static/images/scrambled509.jpg",  "static/images/scrambled1094.jpg",  "static/images/scrambled1080.jpg",  "static/images/scrambled535.jpg",  "static/images/scrambled80.jpg",  "static/images/scrambled253.jpg",  "static/images/scrambled247.jpg",  "static/images/scrambled521.jpg",  "static/images/scrambled94.jpg",  "static/images/scrambled1057.jpg",  "static/images/scrambled1043.jpg",  "static/images/scrambled43.jpg",  "static/images/scrambled290.jpg",  "static/images/scrambled284.jpg",  "static/images/scrambled57.jpg",  "static/images/scrambled292.jpg",  "static/images/scrambled41.jpg",  "static/images/scrambled1069.jpg",  "static/images/scrambled55.jpg",  "static/images/scrambled286.jpg",  "static/images/scrambled1055.jpg",  "static/images/scrambled69.jpg",  "static/images/scrambled1041.jpg",  "static/images/scrambled251.jpg",  "static/images/scrambled82.jpg",  "static/images/scrambled537.jpg",  "static/images/scrambled96.jpg",  "static/images/scrambled523.jpg",  "static/images/scrambled245.jpg",  "static/images/scrambled1096.jpg",  "static/images/scrambled1082.jpg",  "static/images/scrambled279.jpg",  "static/images/scrambled912.jpg",  "static/images/scrambled906.jpg",  "static/images/scrambled735.jpg",  "static/images/scrambled721.jpg",  "static/images/scrambled709.jpg",  "static/images/scrambled682.jpg",  "static/images/scrambled696.jpg",  "static/images/scrambled866.jpg",  "static/images/scrambled872.jpg",  "static/images/scrambled899.jpg",  "static/images/scrambled641.jpg",  "static/images/scrambled127.jpg",  "static/images/scrambled133.jpg",  "static/images/scrambled655.jpg",  "static/images/scrambled669.jpg",  "static/images/scrambled480.jpg",  "static/images/scrambled1109.jpg",  "static/images/scrambled494.jpg",  "static/images/scrambled1121.jpg",  "static/images/scrambled1135.jpg",  "static/images/scrambled325.jpg",  "static/images/scrambled443.jpg",  "static/images/scrambled457.jpg",  "static/images/scrambled331.jpg",  "static/images/scrambled319.jpg",  "static/images/scrambled318.jpg",  "static/images/scrambled456.jpg",  "static/images/scrambled330.jpg",  "static/images/scrambled324.jpg",  "static/images/scrambled442.jpg",  "static/images/scrambled1134.jpg",  "static/images/scrambled1120.jpg",  "static/images/scrambled495.jpg",  "static/images/scrambled1108.jpg",  "static/images/scrambled481.jpg",  "static/images/scrambled668.jpg",  "static/images/scrambled132.jpg",  "static/images/scrambled654.jpg",  "static/images/scrambled640.jpg",  "static/images/scrambled898.jpg",  "static/images/scrambled126.jpg",  "static/images/scrambled873.jpg",  "static/images/scrambled867.jpg",  "static/images/scrambled697.jpg",  "static/images/scrambled683.jpg",  "static/images/scrambled708.jpg",  "static/images/scrambled720.jpg",  "static/images/scrambled734.jpg",  "static/images/scrambled907.jpg",  "static/images/scrambled913.jpg",  "static/images/scrambled1083.jpg",  "static/images/scrambled278.jpg",  "static/images/scrambled1097.jpg",  "static/images/scrambled522.jpg",  "static/images/scrambled97.jpg",  "static/images/scrambled244.jpg",  "static/images/scrambled250.jpg",  "static/images/scrambled536.jpg",  "static/images/scrambled83.jpg",  "static/images/scrambled1040.jpg",  "static/images/scrambled68.jpg",  "static/images/scrambled1054.jpg",  "static/images/scrambled54.jpg",  "static/images/scrambled287.jpg",  "static/images/scrambled293.jpg",  "static/images/scrambled1068.jpg",  "static/images/scrambled40.jpg",  "static/images/scrambled78.jpg",  "static/images/scrambled1050.jpg",  "static/images/scrambled1044.jpg",  "static/images/scrambled44.jpg",  "static/images/scrambled297.jpg",  "static/images/scrambled283.jpg",  "static/images/scrambled50.jpg",  "static/images/scrambled1078.jpg",  "static/images/scrambled1093.jpg",  "static/images/scrambled268.jpg",  "static/images/scrambled1087.jpg",  "static/images/scrambled532.jpg",  "static/images/scrambled87.jpg",  "static/images/scrambled254.jpg",  "static/images/scrambled240.jpg",  "static/images/scrambled526.jpg",  "static/images/scrambled93.jpg",  "static/images/scrambled917.jpg",  "static/images/scrambled903.jpg",  "static/images/scrambled718.jpg",  "static/images/scrambled9.jpg",  "static/images/scrambled730.jpg",  "static/images/scrambled724.jpg",  "static/images/scrambled863.jpg",  "static/images/scrambled877.jpg",  "static/images/scrambled687.jpg",  "static/images/scrambled693.jpg",  "static/images/scrambled678.jpg",  "static/images/scrambled122.jpg",  "static/images/scrambled644.jpg",  "static/images/scrambled888.jpg",  "static/images/scrambled650.jpg",  "static/images/scrambled136.jpg",  "static/images/scrambled1124.jpg",  "static/images/scrambled1130.jpg",  "static/images/scrambled1118.jpg",  "static/images/scrambled485.jpg",  "static/images/scrambled491.jpg",  "static/images/scrambled308.jpg",  "static/images/scrambled446.jpg",  "static/images/scrambled320.jpg",  "static/images/scrambled334.jpg",  "static/images/scrambled452.jpg",  "static/images/scrambled335.jpg",  "static/images/scrambled453.jpg",  "static/images/scrambled447.jpg",  "static/images/scrambled321.jpg",  "static/images/scrambled309.jpg",  "static/images/scrambled490.jpg",  "static/images/scrambled484.jpg",  "static/images/scrambled1119.jpg",  "static/images/scrambled1131.jpg",  "static/images/scrambled1125.jpg",  "static/images/scrambled651.jpg",  "static/images/scrambled889.jpg",  "static/images/scrambled137.jpg",  "static/images/scrambled123.jpg",  "static/images/scrambled645.jpg",  "static/images/scrambled679.jpg",  "static/images/scrambled692.jpg",  "static/images/scrambled686.jpg",  "static/images/scrambled876.jpg",  "static/images/scrambled862.jpg",  "static/images/scrambled725.jpg",  "static/images/scrambled731.jpg",  "static/images/scrambled8.jpg",  "static/images/scrambled719.jpg",  "static/images/scrambled902.jpg",  "static/images/scrambled916.jpg",  "static/images/scrambled241.jpg",  "static/images/scrambled92.jpg",  "static/images/scrambled527.jpg",  "static/images/scrambled86.jpg",  "static/images/scrambled533.jpg",  "static/images/scrambled255.jpg",  "static/images/scrambled1086.jpg",  "static/images/scrambled1092.jpg",  "static/images/scrambled269.jpg",  "static/images/scrambled282.jpg",  "static/images/scrambled1079.jpg",  "static/images/scrambled51.jpg",  "static/images/scrambled45.jpg",  "static/images/scrambled296.jpg",  "static/images/scrambled1045.jpg",  "static/images/scrambled1051.jpg",  "static/images/scrambled79.jpg",  "static/images/scrambled1047.jpg",  "static/images/scrambled1053.jpg",  "static/images/scrambled53.jpg",  "static/images/scrambled280.jpg",  "static/images/scrambled294.jpg",  "static/images/scrambled47.jpg",  "static/images/scrambled1084.jpg",  "static/images/scrambled519.jpg",  "static/images/scrambled1090.jpg",  "static/images/scrambled525.jpg",  "static/images/scrambled90.jpg",  "static/images/scrambled243.jpg",  "static/images/scrambled257.jpg",  "static/images/scrambled531.jpg",  "static/images/scrambled84.jpg",  "static/images/scrambled900.jpg",  "static/images/scrambled914.jpg",  "static/images/scrambled928.jpg",  "static/images/scrambled727.jpg",  "static/images/scrambled733.jpg",  "static/images/scrambled874.jpg",  "static/images/scrambled860.jpg",  "static/images/scrambled690.jpg",  "static/images/scrambled848.jpg",  "static/images/scrambled684.jpg",  "static/images/scrambled109.jpg",  "static/images/scrambled135.jpg",  "static/images/scrambled653.jpg",  "static/images/scrambled647.jpg",  "static/images/scrambled121.jpg"]	
// var randomimageset3 = ["static/images/scrambled1133.jpg",  "static/images/scrambled1127.jpg",  "static/images/scrambled492.jpg",  "static/images/scrambled486.jpg",  "static/images/scrambled479.jpg",  "static/images/scrambled451.jpg",  "static/images/scrambled337.jpg",  "static/images/scrambled323.jpg",  "static/images/scrambled445.jpg",  "static/images/scrambled322.jpg",  "static/images/scrambled444.jpg",  "static/images/scrambled450.jpg",  "static/images/scrambled336.jpg",  "static/images/scrambled478.jpg",  "static/images/scrambled487.jpg",  "static/images/scrambled493.jpg",  "static/images/scrambled1126.jpg",  "static/images/scrambled1132.jpg",  "static/images/scrambled646.jpg",  "static/images/scrambled120.jpg",  "static/images/scrambled134.jpg",  "static/images/scrambled652.jpg",  "static/images/scrambled108.jpg",  "static/images/scrambled685.jpg",  "static/images/scrambled849.jpg",  "static/images/scrambled691.jpg",  "static/images/scrambled861.jpg",  "static/images/scrambled875.jpg",  "static/images/scrambled732.jpg",  "static/images/scrambled726.jpg",  "static/images/scrambled929.jpg",  "static/images/scrambled915.jpg",  "static/images/scrambled901.jpg",  "static/images/scrambled256.jpg",  "static/images/scrambled85.jpg",  "static/images/scrambled530.jpg",  "static/images/scrambled91.jpg",  "static/images/scrambled524.jpg",  "static/images/scrambled242.jpg",  "static/images/scrambled1091.jpg",  "static/images/scrambled518.jpg",  "static/images/scrambled1085.jpg",  "static/images/scrambled295.jpg",  "static/images/scrambled46.jpg",  "static/images/scrambled52.jpg",  "static/images/scrambled281.jpg",  "static/images/scrambled1052.jpg",  "static/images/scrambled1046.jpg",  "static/images/scrambled77.jpg",  "static/images/scrambled63.jpg",  "static/images/scrambled298.jpg",  "static/images/scrambled1063.jpg",  "static/images/scrambled1077.jpg",  "static/images/scrambled267.jpg",  "static/images/scrambled501.jpg",  "static/images/scrambled1088.jpg",  "static/images/scrambled515.jpg",  "static/images/scrambled273.jpg",  "static/images/scrambled88.jpg",  "static/images/scrambled529.jpg",  "static/images/scrambled918.jpg",  "static/images/scrambled924.jpg",  "static/images/scrambled930.jpg",  "static/images/scrambled703.jpg",  "static/images/scrambled717.jpg",  "static/images/scrambled6.jpg",  "static/images/scrambled878.jpg",  "static/images/scrambled688.jpg",  "static/images/scrambled850.jpg",  "static/images/scrambled844.jpg",  "static/images/scrambled677.jpg",  "static/images/scrambled111.jpg",  "static/images/scrambled105.jpg",  "static/images/scrambled663.jpg",  "static/images/scrambled893.jpg",  "static/images/scrambled139.jpg",  "static/images/scrambled887.jpg",  "static/images/scrambled1117.jpg",  "static/images/scrambled1103.jpg",  "static/images/scrambled313.jpg",  "static/images/scrambled475.jpg",  "static/images/scrambled461.jpg",  "static/images/scrambled307.jpg",  "static/images/scrambled449.jpg",  "static/images/scrambled448.jpg",  "static/images/scrambled460.jpg",  "static/images/scrambled306.jpg",  "static/images/scrambled312.jpg",  "static/images/scrambled474.jpg",  "static/images/scrambled1102.jpg",  "static/images/scrambled1116.jpg",  "static/images/scrambled138.jpg",  "static/images/scrambled886.jpg",  "static/images/scrambled892.jpg",  "static/images/scrambled104.jpg",  "static/images/scrambled662.jpg",  "static/images/scrambled676.jpg",  "static/images/scrambled110.jpg",  "static/images/scrambled845.jpg",  "static/images/scrambled851.jpg",  "static/images/scrambled689.jpg",  "static/images/scrambled879.jpg",  "static/images/scrambled7.jpg",  "static/images/scrambled716.jpg",  "static/images/scrambled702.jpg",  "static/images/scrambled931.jpg",  "static/images/scrambled925.jpg",  "static/images/scrambled919.jpg",  "static/images/scrambled528.jpg",  "static/images/scrambled89.jpg",  "static/images/scrambled514.jpg",  "static/images/scrambled1089.jpg",  "static/images/scrambled272.jpg",  "static/images/scrambled266.jpg",  "static/images/scrambled500.jpg",  "static/images/scrambled1076.jpg",  "static/images/scrambled299.jpg",  "static/images/scrambled1062.jpg",  "static/images/scrambled62.jpg",  "static/images/scrambled76.jpg",  "static/images/scrambled60.jpg",  "static/images/scrambled1048.jpg",  "static/images/scrambled74.jpg",  "static/images/scrambled1074.jpg",  "static/images/scrambled48.jpg",  "static/images/scrambled1060.jpg",  "static/images/scrambled270.jpg",  "static/images/scrambled516.jpg",  "static/images/scrambled502.jpg",  "static/images/scrambled264.jpg",  "static/images/scrambled258.jpg",  "static/images/scrambled933.jpg",  "static/images/scrambled927.jpg",  "static/images/scrambled714.jpg",  "static/images/scrambled5.jpg",  "static/images/scrambled700.jpg",  "static/images/scrambled728.jpg",  "static/images/scrambled847.jpg",  "static/images/scrambled853.jpg",  "static/images/scrambled660.jpg",  "static/images/scrambled106.jpg",  "static/images/scrambled112.jpg",  "static/images/scrambled674.jpg",  "static/images/scrambled884.jpg",  "static/images/scrambled890.jpg",  "static/images/scrambled648.jpg",  "static/images/scrambled1128.jpg",  "static/images/scrambled1100.jpg",  "static/images/scrambled1114.jpg",  "static/images/scrambled489.jpg",  "static/images/scrambled304.jpg",  "static/images/scrambled462.jpg",  "static/images/scrambled476.jpg",  "static/images/scrambled310.jpg",  "static/images/scrambled338.jpg",  "static/images/scrambled339.jpg",  "static/images/scrambled477.jpg",  "static/images/scrambled311.jpg",  "static/images/scrambled305.jpg",  "static/images/scrambled463.jpg",  "static/images/scrambled488.jpg",  "static/images/scrambled1115.jpg",  "static/images/scrambled1101.jpg",  "static/images/scrambled1129.jpg",  "static/images/scrambled649.jpg",  "static/images/scrambled891.jpg",  "static/images/scrambled885.jpg",  "static/images/scrambled113.jpg",  "static/images/scrambled675.jpg",  "static/images/scrambled661.jpg",  "static/images/scrambled107.jpg",  "static/images/scrambled852.jpg",  "static/images/scrambled846.jpg",  "static/images/scrambled729.jpg",  "static/images/scrambled701.jpg",  "static/images/scrambled4.jpg",  "static/images/scrambled715.jpg",  "static/images/scrambled926.jpg",  "static/images/scrambled932.jpg",  "static/images/scrambled259.jpg",  "static/images/scrambled503.jpg",  "static/images/scrambled265.jpg",  "static/images/scrambled271.jpg",  "static/images/scrambled517.jpg",  "static/images/scrambled1061.jpg",  "static/images/scrambled49.jpg",  "static/images/scrambled1075.jpg",  "static/images/scrambled75.jpg",  "static/images/scrambled1049.jpg",  "static/images/scrambled61.jpg",  "static/images/scrambled59.jpg",  "static/images/scrambled1071.jpg",  "static/images/scrambled1065.jpg",  "static/images/scrambled65.jpg",  "static/images/scrambled71.jpg",  "static/images/scrambled1059.jpg",  "static/images/scrambled249.jpg",  "static/images/scrambled513.jpg",  "static/images/scrambled275.jpg",  "static/images/scrambled261.jpg",  "static/images/scrambled507.jpg",  "static/images/scrambled936.jpg",  "static/images/scrambled922.jpg",  "static/images/scrambled739.jpg",  "static/images/scrambled711.jpg",  "static/images/scrambled705.jpg",  "static/images/scrambled842.jpg",  "static/images/scrambled856.jpg",  "static/images/scrambled881.jpg",  "static/images/scrambled659.jpg",  "static/images/scrambled895.jpg",  "static/images/scrambled103.jpg",  "static/images/scrambled665.jpg",  "static/images/scrambled671.jpg",  "static/images/scrambled117.jpg",  "static/images/scrambled1105.jpg",  "static/images/scrambled498.jpg",  "static/images/scrambled1111.jpg",  "static/images/scrambled1139.jpg",  "static/images/scrambled329.jpg",  "static/images/scrambled467.jpg",  "static/images/scrambled301.jpg",  "static/images/scrambled315.jpg",  "static/images/scrambled473.jpg",  "static/images/scrambled314.jpg",  "static/images/scrambled472.jpg",  "static/images/scrambled466.jpg",  "static/images/scrambled300.jpg",  "static/images/scrambled328.jpg",  "static/images/scrambled1138.jpg",  "static/images/scrambled1110.jpg",  "static/images/scrambled499.jpg",  "static/images/scrambled1104.jpg",  "static/images/scrambled670.jpg",  "static/images/scrambled116.jpg",  "static/images/scrambled102.jpg",  "static/images/scrambled664.jpg",  "static/images/scrambled894.jpg",  "static/images/scrambled658.jpg",  "static/images/scrambled880.jpg",  "static/images/scrambled857.jpg",  "static/images/scrambled843.jpg",  "static/images/scrambled704.jpg",  "static/images/scrambled1.jpg",  "static/images/scrambled710.jpg",  "static/images/scrambled738.jpg",  "static/images/scrambled923.jpg",  "static/images/scrambled937.jpg",  "static/images/scrambled260.jpg",  "static/images/scrambled506.jpg",  "static/images/scrambled512.jpg",  "static/images/scrambled274.jpg",  "static/images/scrambled248.jpg",  "static/images/scrambled1058.jpg",  "static/images/scrambled70.jpg",  "static/images/scrambled64.jpg",  "static/images/scrambled1064.jpg",  "static/images/scrambled1070.jpg",  "static/images/scrambled58.jpg",  "static/images/scrambled1066.jpg",  "static/images/scrambled289.jpg",  "static/images/scrambled1072.jpg",  "static/images/scrambled72.jpg",  "static/images/scrambled66.jpg",  "static/images/scrambled538.jpg",  "static/images/scrambled99.jpg",  "static/images/scrambled1099.jpg",  "static/images/scrambled504.jpg",  "static/images/scrambled262.jpg",  "static/images/scrambled276.jpg",  "static/images/scrambled510.jpg",  "static/images/scrambled921.jpg",  "static/images/scrambled935.jpg",  "static/images/scrambled909.jpg",  "static/images/scrambled706.jpg",  "static/images/scrambled712.jpg",  "static/images/scrambled3.jpg",  "static/images/scrambled855.jpg",  "static/images/scrambled699.jpg",  "static/images/scrambled841.jpg",  "static/images/scrambled869.jpg",  "static/images/scrambled128.jpg",  "static/images/scrambled896.jpg",  "static/images/scrambled882.jpg",  "static/images/scrambled114.jpg",  "static/images/scrambled672.jpg",  "static/images/scrambled666.jpg",  "static/images/scrambled100.jpg",  "static/images/scrambled1112.jpg",  "static/images/scrambled1106.jpg",  "static/images/scrambled458.jpg",  "static/images/scrambled470.jpg",  "static/images/scrambled316.jpg",  "static/images/scrambled302.jpg",  "static/images/scrambled464.jpg",  "static/images/scrambled303.jpg",  "static/images/scrambled465.jpg",  "static/images/scrambled471.jpg",  "static/images/scrambled317.jpg",  "static/images/scrambled459.jpg"]	
// var randomimageset4 = ["static/images/scrambled1107.jpg",  "static/images/scrambled1113.jpg",  "static/images/scrambled667.jpg",  "static/images/scrambled101.jpg",  "static/images/scrambled115.jpg",  "static/images/scrambled673.jpg",  "static/images/scrambled883.jpg",  "static/images/scrambled129.jpg",  "static/images/scrambled897.jpg",  "static/images/scrambled868.jpg",  "static/images/scrambled840.jpg",  "static/images/scrambled698.jpg",  "static/images/scrambled854.jpg",  "static/images/scrambled2.jpg",  "static/images/scrambled713.jpg",  "static/images/scrambled707.jpg",  "static/images/scrambled908.jpg",  "static/images/scrambled934.jpg",  "static/images/scrambled920.jpg",  "static/images/scrambled277.jpg",  "static/images/scrambled511.jpg",  "static/images/scrambled505.jpg",  "static/images/scrambled1098.jpg",  "static/images/scrambled263.jpg",  "static/images/scrambled98.jpg",  "static/images/scrambled539.jpg",  "static/images/scrambled67.jpg",  "static/images/scrambled73.jpg",  "static/images/scrambled288.jpg",  "static/images/scrambled1073.jpg",  "static/images/scrambled1067.jpg",  "static/images/scrambled14.jpg",  "static/images/scrambled1028.jpg",  "static/images/scrambled28.jpg",  "static/images/scrambled1000.jpg",  "static/images/scrambled589.jpg",  "static/images/scrambled1014.jpg",  "static/images/scrambled562.jpg",  "static/images/scrambled204.jpg",  "static/images/scrambled210.jpg",  "static/images/scrambled576.jpg",  "static/images/scrambled238.jpg",  "static/images/scrambled1202.jpg",  "static/images/scrambled947.jpg",  "static/images/scrambled953.jpg",  "static/images/scrambled760.jpg",  "static/images/scrambled774.jpg",  "static/images/scrambled984.jpg",  "static/images/scrambled748.jpg",  "static/images/scrambled990.jpg",  "static/images/scrambled833.jpg",  "static/images/scrambled827.jpg",  "static/images/scrambled199.jpg",  "static/images/scrambled172.jpg",  "static/images/scrambled614.jpg",  "static/images/scrambled600.jpg",  "static/images/scrambled166.jpg",  "static/images/scrambled628.jpg",  "static/images/scrambled1148.jpg",  "static/images/scrambled1174.jpg",  "static/images/scrambled1160.jpg",  "static/images/scrambled416.jpg",  "static/images/scrambled370.jpg",  "static/images/scrambled364.jpg",  "static/images/scrambled402.jpg",  "static/images/scrambled358.jpg",  "static/images/scrambled359.jpg",  "static/images/scrambled365.jpg",  "static/images/scrambled403.jpg",  "static/images/scrambled417.jpg",  "static/images/scrambled371.jpg",  "static/images/scrambled1161.jpg",  "static/images/scrambled1175.jpg",  "static/images/scrambled1149.jpg",  "static/images/scrambled629.jpg",  "static/images/scrambled601.jpg",  "static/images/scrambled167.jpg",  "static/images/scrambled173.jpg",  "static/images/scrambled615.jpg",  "static/images/scrambled826.jpg",  "static/images/scrambled198.jpg",  "static/images/scrambled832.jpg",  "static/images/scrambled991.jpg",  "static/images/scrambled749.jpg",  "static/images/scrambled985.jpg",  "static/images/scrambled775.jpg",  "static/images/scrambled761.jpg",  "static/images/scrambled952.jpg",  "static/images/scrambled946.jpg",  "static/images/scrambled1203.jpg",  "static/images/scrambled239.jpg",  "static/images/scrambled211.jpg",  "static/images/scrambled577.jpg",  "static/images/scrambled563.jpg",  "static/images/scrambled205.jpg",  "static/images/scrambled1015.jpg",  "static/images/scrambled588.jpg",  "static/images/scrambled1001.jpg",  "static/images/scrambled29.jpg",  "static/images/scrambled1029.jpg",  "static/images/scrambled15.jpg",  "static/images/scrambled17.jpg",  "static/images/scrambled1017.jpg",  "static/images/scrambled1003.jpg",  "static/images/scrambled575.jpg",  "static/images/scrambled213.jpg",  "static/images/scrambled207.jpg",  "static/images/scrambled561.jpg",  "static/images/scrambled549.jpg",  "static/images/scrambled978.jpg",  "static/images/scrambled950.jpg",  "static/images/scrambled788.jpg",  "static/images/scrambled1201.jpg",  "static/images/scrambled944.jpg",  "static/images/scrambled777.jpg",  "static/images/scrambled763.jpg",  "static/images/scrambled993.jpg",  "static/images/scrambled987.jpg",  "static/images/scrambled818.jpg",  "static/images/scrambled824.jpg",  "static/images/scrambled830.jpg",  "static/images/scrambled165.jpg",  "static/images/scrambled603.jpg",  "static/images/scrambled617.jpg",  "static/images/scrambled171.jpg",  "static/images/scrambled159.jpg",  "static/images/scrambled1163.jpg",  "static/images/scrambled398.jpg",  "static/images/scrambled1177.jpg",  "static/images/scrambled401.jpg",  "static/images/scrambled367.jpg",  "static/images/scrambled373.jpg",  "static/images/scrambled415.jpg",  "static/images/scrambled1188.jpg",  "static/images/scrambled429.jpg",  "static/images/scrambled428.jpg",  "static/images/scrambled372.jpg",  "static/images/scrambled1189.jpg",  "static/images/scrambled414.jpg",  "static/images/scrambled400.jpg",  "static/images/scrambled366.jpg",  "static/images/scrambled1176.jpg",  "static/images/scrambled1162.jpg",  "static/images/scrambled399.jpg",  "static/images/scrambled158.jpg",  "static/images/scrambled616.jpg",  "static/images/scrambled170.jpg",  "static/images/scrambled164.jpg",  "static/images/scrambled602.jpg",  "static/images/scrambled831.jpg",  "static/images/scrambled825.jpg",  "static/images/scrambled819.jpg",  "static/images/scrambled986.jpg",  "static/images/scrambled992.jpg",  "static/images/scrambled762.jpg",  "static/images/scrambled776.jpg",  "static/images/scrambled945.jpg",  "static/images/scrambled1200.jpg",  "static/images/scrambled789.jpg",  "static/images/scrambled951.jpg",  "static/images/scrambled979.jpg",  "static/images/scrambled548.jpg",  "static/images/scrambled206.jpg",  "static/images/scrambled560.jpg",  "static/images/scrambled574.jpg",  "static/images/scrambled212.jpg",  "static/images/scrambled1002.jpg",  "static/images/scrambled1016.jpg",  "static/images/scrambled16.jpg",  "static/images/scrambled1012.jpg",  "static/images/scrambled1006.jpg",  "static/images/scrambled12.jpg",  "static/images/scrambled558.jpg",  "static/images/scrambled216.jpg",  "static/images/scrambled570.jpg",  "static/images/scrambled564.jpg",  "static/images/scrambled202.jpg",  "static/images/scrambled955.jpg",  "static/images/scrambled1204.jpg",  "static/images/scrambled941.jpg",  "static/images/scrambled799.jpg",  "static/images/scrambled969.jpg",  "static/images/scrambled996.jpg",  "static/images/scrambled982.jpg",  "static/images/scrambled772.jpg",  "static/images/scrambled766.jpg",  "static/images/scrambled821.jpg",  "static/images/scrambled835.jpg",  "static/images/scrambled809.jpg",  "static/images/scrambled148.jpg",  "static/images/scrambled606.jpg",  "static/images/scrambled160.jpg",  "static/images/scrambled174.jpg",  "static/images/scrambled612.jpg",  "static/images/scrambled1166.jpg",  "static/images/scrambled1172.jpg",  "static/images/scrambled389.jpg",  "static/images/scrambled438.jpg",  "static/images/scrambled362.jpg",  "static/images/scrambled404.jpg",  "static/images/scrambled1199.jpg",  "static/images/scrambled410.jpg",  "static/images/scrambled376.jpg",  "static/images/scrambled411.jpg",  "static/images/scrambled377.jpg",  "static/images/scrambled363.jpg",  "static/images/scrambled1198.jpg",  "static/images/scrambled405.jpg",  "static/images/scrambled439.jpg",  "static/images/scrambled1173.jpg",  "static/images/scrambled388.jpg",  "static/images/scrambled1167.jpg",  "static/images/scrambled175.jpg",  "static/images/scrambled613.jpg",  "static/images/scrambled607.jpg",  "static/images/scrambled161.jpg",  "static/images/scrambled149.jpg",  "static/images/scrambled808.jpg",  "static/images/scrambled834.jpg",  "static/images/scrambled820.jpg",  "static/images/scrambled767.jpg",  "static/images/scrambled773.jpg",  "static/images/scrambled983.jpg",  "static/images/scrambled997.jpg",  "static/images/scrambled968.jpg",  "static/images/scrambled798.jpg",  "static/images/scrambled940.jpg",  "static/images/scrambled1205.jpg",  "static/images/scrambled954.jpg",  "static/images/scrambled565.jpg",  "static/images/scrambled203.jpg",  "static/images/scrambled217.jpg",  "static/images/scrambled571.jpg",  "static/images/scrambled559.jpg",  "static/images/scrambled13.jpg",  "static/images/scrambled1007.jpg",  "static/images/scrambled1013.jpg",  "static/images/scrambled598.jpg",  "static/images/scrambled1005.jpg",  "static/images/scrambled39.jpg",  "static/images/scrambled1011.jpg",  "static/images/scrambled11.jpg",  "static/images/scrambled1039.jpg",  "static/images/scrambled229.jpg",  "static/images/scrambled201.jpg",  "static/images/scrambled567.jpg",  "static/images/scrambled573.jpg",  "static/images/scrambled215.jpg",  "static/images/scrambled942.jpg",  "static/images/scrambled956.jpg",  "static/images/scrambled759.jpg",  "static/images/scrambled981.jpg",  "static/images/scrambled995.jpg",  "static/images/scrambled765.jpg",  "static/images/scrambled771.jpg",  "static/images/scrambled836.jpg",  "static/images/scrambled188.jpg",  "static/images/scrambled822.jpg",  "static/images/scrambled639.jpg",  "static/images/scrambled611.jpg",  "static/images/scrambled177.jpg",  "static/images/scrambled163.jpg",  "static/images/scrambled605.jpg",  "static/images/scrambled1171.jpg",  "static/images/scrambled1165.jpg",  "static/images/scrambled1159.jpg",  "static/images/scrambled349.jpg",  "static/images/scrambled375.jpg",  "static/images/scrambled413.jpg",  "static/images/scrambled407.jpg",  "static/images/scrambled361.jpg",  "static/images/scrambled406.jpg",  "static/images/scrambled360.jpg",  "static/images/scrambled374.jpg",  "static/images/scrambled412.jpg",  "static/images/scrambled348.jpg",  "static/images/scrambled1158.jpg",  "static/images/scrambled1164.jpg",  "static/images/scrambled1170.jpg",  "static/images/scrambled162.jpg",  "static/images/scrambled604.jpg",  "static/images/scrambled610.jpg",  "static/images/scrambled176.jpg",  "static/images/scrambled638.jpg",  "static/images/scrambled823.jpg",  "static/images/scrambled837.jpg",  "static/images/scrambled189.jpg",  "static/images/scrambled770.jpg",  "static/images/scrambled764.jpg",  "static/images/scrambled994.jpg",  "static/images/scrambled980.jpg",  "static/images/scrambled758.jpg",  "static/images/scrambled957.jpg",  "static/images/scrambled943.jpg",  "static/images/scrambled572.jpg",  "static/images/scrambled214.jpg",  "static/images/scrambled200.jpg",  "static/images/scrambled566.jpg",  "static/images/scrambled228.jpg",  "static/images/scrambled1038.jpg",  "static/images/scrambled10.jpg",  "static/images/scrambled1010.jpg",  "static/images/scrambled38.jpg",  "static/images/scrambled1004.jpg",  "static/images/scrambled599.jpg"]		

psiTurk.preloadImages(randomimageset);
// psiTurk.preloadImages(randomimageset2);
// psiTurk.preloadImages(randomimageset3);
// psiTurk.preloadImages(randomimageset4);

/********************
* HTML manipulation
*
* All HTML files in the templates directory are requested 
* from the server when the PsiTurk object is created above. We
* need code to get those pages from the PsiTurk object and 
* insert them into the document.
*
********************/

/********************
* Practice -  WSE TEST *
********************/


var Practice1 = function() {

	var trialstart, // time word is presented
	    listening = true;

	trial_count = 0;
	function readTextFile(file){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText.split("\n");
					//allText = rawFile.responseText.toString().split("\n");
					//console.log(allText);
					var arr1 = [];
					
					allText.map(function(item){
					  var tabs = item.split('\t');
					  //console.log("0",tabs[0], "1",tabs[1], "2",tabs[2],"3", tabs[3],"4", tabs[4]);
					  arr1.push(tabs[0]);
					  arr1.push(tabs[1]);
					  arr1.push(tabs[2]);
					  arr1.push(tabs[3]);
					  arr1.push(tabs[4]);
					  arr1.push(tabs[5]);
					  arr1.push(tabs[6]);
					  arr1.push(tabs[7]);
					  arr1.push(tabs[8]);
					  arr1.push(tabs[9]);
					  arr1.push(tabs[10]);
					});
					//alert(arr1);
					//console.log(arr1);
					input = [];
					var locs = [];
					var tab = [];
					for (var i = 0; i < 240; i++){
						for (var j = 0; j<11; j++){
							tab[j] = arr1[11*i+j];
						};
						input[i] = [tab[0],tab[1],tab[2],tab[3],tab[4],tab[5],tab[6],tab[7],tab[8],tab[9],tab[10]];
						
					};
					//console.log(arr1);
					var first = [];
					stimuli = [];
					for (var h = 0; h < 240; h++){
						first = input[h];
						stimuli[h] =first;
						//console.log(stimuli);
					};		
				}
			}
		}
		rawFile.send(null);
		return stimuli;
	};

	function readTextFile0(file){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText.split("\n");
					//allText = rawFile.responseText.toString().split("\n");
					//console.log(allText);
					var arr1 = [];
					
					allText.map(function(item){
					  var tabs = item.split('\t');
					  //console.log("0",tabs[0], "1",tabs[1], "2",tabs[2],"3", tabs[3],"4", tabs[4]);
					  arr1.push(tabs[0]);
					});
					//alert(arr1);
					//console.log(arr1);
					input = [];
					var locs = [];
					var tab = [];
					for (var i = 0; i < 240; i++){
						for (var j = 0; j<1; j++){
							tab[j] = arr1[1*i+j];
						};
						input[i] = [tab[0]];
						
					};
					//console.log(arr1);
					var first = [];
					stimuli = [];
					for (var h = 0; h < 240; h++){
						first = input[h];
						stimuli[h] =first;
						//console.log(stimuli);
					};		
				}
			}
		}
		rawFile.send(null);
		return stimuli;
	};

	order = [1,1,2,2];
	allwords_order = [];

	function readarray(){
	    for (var i = 0; i < 4; i++){ //number of words
	        rand_order = _.shuffle(order); //shuffle the order
	        for (var j = 0; j <4; j++){ //this is to assign the order for each word
	            allwords_order.push(rand_order[j]);  
	        }
	    } 

	    //stimuli = readTextFile("/static/practice-stim-list.txt");

	    stimuli = readTextFile("/static/stim/practice-stim-list.txt");	

	    var combined_cond = [];
	    
	    for(var i=0;i<8;i++) {
		  combined_cond[i] = stimuli[i].concat(allwords_order[i]);
		}
	    return combined_cond;

	};


	stims = readarray();
	stims = _.shuffle(stims);
	pracstims = stims.slice(0, 8);

	//shuffles the order of the stimuli

	var next = function() {
		if (pracstims.length===0) {
			var s = Snap('#svgMain');
			s.clear();
			clearTimeout(handle7);
			finish2();
		}
		//proceeds through the stimuli until there are none left (len=0)

		else {

			var s = Snap('#svgMain');
			s.clear(); //clears the screen
			stim = pracstims.shift(); //moves onto the next stim
			clearTimeout();
			show_fixation(); //calls the show_fixation function
			handle2 = setTimeout(function(){
				show_word(stim[7]);},500); //fixation on screen until 1000ms, then show_word
			handle2 = setTimeout(function(){
				show_mask2();},1000); //fixation on screen until 1000ms, then show_word
			handle2 = setTimeout(function(){
				show_word(stim[0]);},1250); //fixation on screen until 1000ms, then show_word
			handle3 = setTimeout(function(){
				show_mask();},1285); //show_word on screen for 60ms, then show_mask until response
			listening = true; 
			
		};
	};


	var response_handler = function(e, trialonset) {
		if (!listening) return;

		var keyCode = e.keyCode,
			response;

		switch (keyCode) {
			case 77:
				// "M"
				response="1";
				break;
			case 90:
				// "Z"
				response="2";
				break;
			default:
				response = String.fromCharCode();
				break;
				//above is where the responses are encoded
		}
		if (response.length>0) {
			var hit = response == stim[1]; 
			var rt = new Date().getTime() - trialstart; //this records the rt
			//console.log(trialstart);
			//console.log(rt);
			if (response == stim[11]) {
				var accuracy = 1;
			}
			else { 
				var accuracy = 0
			} 

			psiTurk.recordTrialData({'phase':"PRAC",
                                     'word':stim[0],
                                     'targetletter':stim[5],
                                     'trial#':trial_count,
                                     'primeword': stim[6],
                                     'primerelatedness': stim[7],
                                     'rootfrequency' : stim[8],
                                     'primefreqeuency': stim[9],
                                     'letterswitchposition': stim[10],
                                     'targetPosition': stim[11],
                                     'response':response,
                                     'accuracy':accuracy,
                                     'rt':rt}

                                );
			ITI();
		};
	};

	var finish2 = function() {
		var s = Snap('#svgMain');
		var after_prac = s.image("/static/images/afterprac.png", 60,105);
		$("body").unbind("keydown", response_handler); // bind keys
		document.addEventListener("keydown",finishprac, false);
	};

	var finishprac = function(e){
		if (e.keyCode == 32) {
			document.removeEventListener("keydown",finishprac,false);
			currentview = new WSEExperiment();
			}
		};

	var show_word = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); 
		s.clear();
		//the 'show_word' function presents the stim[0] on the screen, using the snap library for size and font details
	
		var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

	};

	var show_mask = function(text, color) {
		var s = Snap('#svgMain');
		$("body").bind("keydown", response_handler); // Bind keys
		s.clear();
		//var text= '' //this is the mask
		//var q1 = "Did you see a " //this is the first part of the questions
		//var q3 = " or a " // just additional wording
		
		if (stim[11] == '2') {
			var q2 = randomString2()
			var q4 = randomString()
		} else {
			var q2 = randomString()
			var q4 = randomString2()
		}

		//var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		//var question = s.text(240,600,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
		//			   s.text(840,600,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		if (stim[5] == 1) {
			var question = s.text(440,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(440,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 2) {
			var question = s.text(505,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(505,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 3) {
			var question = s.text(565,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(565,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else {
			var question = s.text(632,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(632,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
			
		//font and sizing for the mask and question from the snap library

		var scramble1 = s.image("/static/images/scrambled1a.jpg", 397, 320, 80, 110);
		var scramble2 = s.image("/static/images/scrambled2a.jpg", 460, 320, 80, 110);
		var scramble3 = s.image("/static/images/scrambled3a.jpg", 523, 320, 80, 110);
		var scramble4 = s.image("/static/images/scrambled4a.jpg", 585, 320, 80, 110);

		trialstart = new Date().getTime(); //records date and time

	};

	var show_mask2 = function(text, color) {
		var s = Snap('#svgMain');
		$("body").bind("keydown", response_handler); // Bind keys
		s.clear();
		//var text= '' //this is the mask
		//var q1 = "Did you see a " //this is the first part of the questions
		//var q3 = " or a " // just additional wording
		
		//var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		/*var scramble1 = s.image("/static/images/scrambled5.jpg", 397, 320, 80, 110);
		var scramble2 = s.image("/static/images/scrambled6.jpg", 460, 320, 80, 110);
		var scramble3 = s.image("/static/images/scrambled7.jpg", 523, 320, 80, 110);
		var scramble4 = s.image("/static/images/scrambled8.jpg", 585, 320, 80, 110);*/		

		var scramble5 = s.image("/static/images/scrambled1b.jpg", 397, 320, 80, 110);
		var scramble6 = s.image("/static/images/scrambled2b.jpg", 460, 320, 80, 110);
		var scramble7 = s.image("/static/images/scrambled3b.jpg", 523, 320, 80, 110);
		var scramble8 = s.image("/static/images/scrambled4b.jpg", 585, 320, 80, 110);

	};



 	var show_fixation = function(){
		document.body.style.cursor = 'none';
		var event = $(document).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});
		var s = Snap('#svgMain');
		var horizontal = s.line(520,380,560,380);
		horizontal.attr({
		  id:"fix1",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10
		});
		var vertical = s.line(540,360,540,400);
		vertical.attr({
		  id:"fix2",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10

		});
	};

	var randomString = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXY";//all possible incorrect stimuli drawn from presented letters
    for (var stimIndex = 1; stimIndex < 5; stimIndex++) {
    	possible = possible.replace(stim[stimIndex], "")
    }
    text += possible.charAt(Math.floor(Math.random() * possible.length));
	//this is the variable that calls a random letter from the alphabet that isn't contained within the word
  	return text;
    };

    var randomString2 = function() {
    //var randomnumber = Math.floor(Math.random() * 4); // as the random function only calls a 0 or 1, this makes our options 0 to 3
    //var text = stim[randomnumber + 1]; // this adds 1 to the random number as to make the options 1 to 4, as opposed to 0 to 3, to match (stims[1,2,3,4]) which are the letters of the word
    var text = stim[5];

    if (stim[5] == '1'){
    	var text = stim[1]
    }
    if (stim[5] == '2'){
    	var text = stim[2]
    }    
    if (stim[5] == '3'){
    	var text = stim[3]
    }    
    if (stim[5] == '4'){
    	var text = stim[4]
    }
  	return text;
    };



	var ITI = function(){
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); // unBind keys
		s.clear();
		trial_count++;
		handle7 = setTimeout(function(){
				ifbreak()},500);
	};

	var ifbreak = function(){
		if (trial_count % 120 == 0 && trial_count != 240){
			var s = Snap('#svgMain');
			s.clear();
			var blockbreak = s.image("/static/images/break.png", 280,300);
			document.addEventListener("keypress",nextblock,false);
		}
		else{
			next();
		};
	};

	var nextblock = function(e){
		if (e.keyCode == 32){
			document.removeEventListener("keypress",nextblock,false);
			clearTimeout(handle7);
			next();
		}
	};
	
	// Load the stage.html snippet into the body of the page
	psiTurk.showPage('stage.html');

	// Register the response handler that is defined above to handle any
	// key down events.
	$("body").focus().keydown(response_handler); 

	// Start the test
	next();
};

/********************
*  WSE TEST       *
********************/


var WSEExperiment = function() {

	var trialstart, // time word is presented
	    listening = true;

	trial_count = 0;
	function readTextFile2(file){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText.split("\n");
					//allText = rawFile.responseText.toString().split("\n");
					//console.log(allText);
					var arr1 = [];
					
					allText.map(function(item){
					  var tabs = item.split('\t');
					  //console.log("0",tabs[0], "1",tabs[1], "2",tabs[2],"3", tabs[3],"4", tabs[4]);
					  arr1.push(tabs[0]);
					  arr1.push(tabs[1]);
					  arr1.push(tabs[2]);
					  arr1.push(tabs[3]);
					  arr1.push(tabs[4]);
					  arr1.push(tabs[5]);
					  arr1.push(tabs[6]);
					  arr1.push(tabs[7]);
					  arr1.push(tabs[8]);
					  arr1.push(tabs[9]);
					  arr1.push(tabs[10]);
					});
					//alert(arr1);
					//console.log(arr1);
					input = [];
					var locs = [];
					var tab = [];
					for (var i = 0; i < 240; i++){
						for (var j = 0; j<11; j++){
							tab[j] = arr1[11*i+j];
						};
						input[i] = [tab[0],tab[1],tab[2],tab[3],tab[4],tab[5],tab[6],tab[7],tab[8],tab[9],tab[10]];
						
					};
					//console.log(arr1);
					var first = [];
					stimuli = [];
					for (var h = 0; h < 240; h++){
						first = input[h];
						stimuli[h] =first;
						//console.log(stimuli);
					};		
				}
			}
		}
		rawFile.send(null);
		return stimuli;
	};
	order = [1,1,2,2];
	allwords_order = [];

	reference = [];
	//reference = readTextFile0("/static/js/reference.txt"); //reference is the text file to read in a specfic stimset
	
	reference = Math.floor(Math.random() * 7) +1;

	function readarray2(){
	    for (var i = 0; i < 80; i++){ //number of words
	        rand_order = _.shuffle(order); //shuffle the order
	        for (var j = 0; j <3; j++){ //this is to assign the order for each word
	            allwords_order.push(rand_order[j]);  
	        }
	    }

	    if (reference == "1"){
	    	stimuli = readTextFile2("/static/stim/stim-list.txt");	
	    }
	    if (reference == "2"){
	    	stimuli = readTextFile2("/static/stim/stim-list2.txt");	
	    }
	    if (reference == "3"){
	    	stimuli = readTextFile2("/static/stim/stim-list3.txt");	
	    }
	    if (reference == "4"){
	    	stimuli = readTextFile2("/static/stim/stim-list4.txt");	
	    }
	    if (reference == "5"){
	    	stimuli = readTextFile2("/static/stim/stim-list5.txt");	
	    }
	    if (reference == "6"){
	    	stimuli = readTextFile2("/static/stim/stim-list6.txt");	
	    }
	    if (reference == "7"){
	    	stimuli = readTextFile2("/static/stim/stim-list7.txt");	
	     }
	    // if (reference == "8"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list8.txt");	
	    // }
	    // if (reference == "9"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list9.txt");	
	    // }
	    // if (reference == "10"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list10.txt");	
	    // }
	    // if (reference == "11"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list11.txt");	
	    // }
	    // if (reference == "12"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list12.txt");	
	    // }
	    // if (reference == "13"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list13.txt");	
	    // }
	    // if (reference == "14"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list14.txt");	
	    // }
	    // if (reference == "15"){
	    // 	stimuli = readTextFile2("/static/stim/stim-list15.txt");	
	    // }

	    
	    var combined_cond = [];
	    
	    for(var i=0;i<240;i++) {
		  combined_cond[i] = stimuli[i].concat(allwords_order[i]);
		}
		//console.log(combined_cond);
	    return combined_cond;

	};

	stims = readarray2();

	stimsb1 = _.shuffle(stims.slice(0,48));
	stimsb2 = _.shuffle(stims.slice(48,96));
	stimsb3 = _.shuffle(stims.slice(96,144));
	stimsb4 = _.shuffle(stims.slice(144,192));
	stimsb5 = _.shuffle(stims.slice(192,240));

	/*
	console.log(stimsb1)
	console.log(stimsb2)
	console.log(stimsb3)
	console.log(stimsb4)
	console.log(stimsb5)
	console.log(stimsb6)
	console.log(stimsb7)
	console.log(stimsb8)
	*/

	stims = stimsb1.concat(stimsb2,stimsb3,stimsb4,stimsb5);

	current_condition = []


	//shuffles the order of the stimuli

	var next = function() {
		if (stims.length===0) {
			var s = Snap('#svgMain');
			s.clear();
			clearTimeout(handle7);
			finish();
		}
		//proceeds through the stimuli until there are none left (len=0)

		else {
			var s = Snap('#svgMain');
			s.clear(); //clears the screen
			stim = stims.shift(); //moves onto the next stim
			
			if (stim[9] == 'act priming abs'){
			current_condition = cond[0];
			} 
			if (stim[9] == 'pabs priming act'){
			current_condition = cond[1];
			} 
			if (stim[9] == 'pact priming pabs'){
			current_condition = cond[2];
			}
			if (stim[9] == 'abs priming pact'){
			current_condition = cond[3];
			}
			if (stim[9] == 'pabs priming abs'){
			current_condition = cond[4];
			}
			if (stim[9] == 'pact priming act'){
			current_condition = cond[5];
			}
			if (stim[9] == 'abs priming pabs'){
			current_condition = cond[6];
			}
			if (stim[9] == 'act priming pact'){
			current_condition = cond[7];
			}
			if (stim[9] == 'pact priming abs'){
			current_condition = cond[8];
			}
			if (stim[9] == 'abs priming act'){
			current_condition = cond[9];
			}
			if (stim[9] == 'act priming pabs'){
			current_condition = cond[10];
			}
			if (stim[9] == 'pabs priming pact'){
			current_condition = cond[11];
			}
			if (stim[9] == 'abs priming abs'){
			current_condition = cond[12];
			}
			if (stim[9] == 'act priming act'){
			current_condition = cond[13];
			}
			if (stim[9] == 'pabs priming pabs'){
			current_condition = cond[14];
			}
			if (stim[9] == 'pact priming pact'){
			current_condition = cond[15];
			}

			newdiff=staircase(); //you might want to assign the value to a variable and record it			//console.log(newdiff,rev_all)
			clearTimeout();
			show_fixation(); //calls the show_fixation function
			handle2 = setTimeout(function(){
				show_word(stim[7]);},500); //fixation on screen until 1000ms, then show_word
			handle2 = setTimeout(function(){
				show_mask2();},1000); //fixation on screen until 1000ms, then show_word
			handle2 = setTimeout(function(){
				show_word(stim[0]);},1250); //fixation on screen until 1000ms, then show_word
			handle3 = setTimeout(function(){
				show_mask();},newdiff); //show_word on screen for 60ms, then show_mask until response
			listening = true; 
			
		};
	};


	var response_handler = function(e, trialonset) {
		if (!listening) return;

		var keyCode = e.keyCode,
			response;

		switch (keyCode) {
			case 77:
				// "M"
				response="1";
				break;
			case 90:
				// "Z"
				response="2";
				break;
			default:
				response = String.fromCharCode();
				break;
				//above is where the responses are encoded
		}
		if (response.length>0) {
			var hit = response == stim[1]; 
			var rt = new Date().getTime() - trialstart; //this records the rt
			//console.log(trialstart);
			//console.log(rt);
			if (response == stim[11]) {
				var accuracy = 1;
			}
			else { 
				var accuracy = 0
			} 

			psiTurk.recordTrialData({'phase':"TEST",
                                     'rootword':stim[0],
                                     'targetletter':stim[5],
                                     'trial#':trial_count,
                                     'rootword_group': stim[6],
                                     'prime': stim[7],
                                     'prime_group' : stim[8],
                                     'staircase_group': stim[9],
                                     'block': stim[10],
                                     'targetPosition': stim[11],
                                     'response':response,
                                     'accuracy':accuracy,
                                     'rt':rt,
                                 	 'Abs-Act-threshold':A1_diff,
                                 	 'Act-PAbs-threshold':B1_diff,                                 	 
                                 	 'PAbs-PAct-threshold':C1_diff,
                                 	 'PAct-Abs-threshold':D1_diff,
                                 	 'Abs-PAbs-threshold':E1_diff,                                 	 
                                 	 'Act-PAct-threshold':F1_diff,
                                 	 'PAbs-Abs-threshold':G1_diff,
                                 	 'PAct-Act-threshold':H1_diff,                                 	 
                                 	 'Abs-PAct-threshold':I1_diff,
                                 	 'Act-Abs-threshold':J1_diff,
                                 	 'PAbs-Act-threshold':K1_diff,                                 	 
                                 	 'PAct-PAbs-threshold':L1_diff,
                                 	 'Abs-Abs-threshold':M1_diff,
                                 	 'Act-Act-threshold':N1_diff,                                 	 
                                 	 'PAbs-PAbs-threshold':O1_diff,
                                 	 'PAct-PAct-threshold':P1_diff,
                                 	 'newdiff':newdiff,
                                 	 'reference':reference} 
                                );


			ITI();

		};


		//************************************************************************//
	
	//startdiff = staircase(); 
	//you will first call the staircase function and it will return the current value for the stimulus difference

	//Once you get the response for this trial, you will decide whether the response is correct or not and
	//then update the staircase (reversals and wait for each condition)

	if(response == stim[11]){
		acc = 1; //if the trial response is correct
	    if (reversals < 1){//before the first reversal, it is set to be one-down, one-up for the efficiency of the staircase
	        wait = 2; //correct response - we set wait to 2 so that for the next trial, staircase will go down
	    }
	    if (reversals >= 1){//switch to two-down one-up after the first reversal
	        wait = wait+1; //correct response - wait value goes up by 1
	    }
	    if (wait ==2){//this is to track the sign of the staircase change, whether going up or down
	        sign = -1; //-1 means going down
	    }
	    if (wait ==1){ //when wait ==1, it means the previous trial has a correct response
	        sign = sign_back1; // the sign of the current trial would be the same as the previous trial
	    }
	}
	else{
		acc = 0; //if acc != 0, we reset wait to 0, so the staircase for the next trial will go up
	    wait = 0;
	    sign = 1;//sign of the current trial set to 1, meaning the direction of going up
	};
	//we will use the sign of the current and past trial to decide if there is a reversal or not
	if (trial1!= 0 & sign != sign_back1){//when the two signs are not the same, there is a reversal
	    current_rev = rev_all[current_condition];//we get the reversal for the current condition
	    current_rev ++;//increase it by 1
	    rev_all[current_condition] = current_rev;//and then assign back to the rev_all variable
	}
	if (trial1 ==0 & sign != sign_back1){
	    current_rev = rev_all[current_condition];
	    current_rev ++;
	    rev_all[current_condition] = current_rev;
	}

	switch(current_condition){ //update those variables after each trial
	    case 0:
	        A1_back1 = sign;
	        cond_trial = A1_trial;
	        A1_wait = wait;
	        A1_revback1 = current_rev;             
	        break;
	    case 1:
	        B1_back1 = sign;
	        cond_trial = B1_trial;
	        B1_wait = wait;
	        B1_revback1 = current_rev;             
	        break;
	     case 2:
	        C1_back1 = sign;
	        cond_trial = C1_trial;
	        C1_wait = wait;
	        C1_revback1 = current_rev;             
	        break;
	     case 3:
	        D1_back1 = sign;
	        cond_trial = D1_trial;
	        D1_wait = wait;
	        D1_revback1 = current_rev;             
	        break;
	     case 4:
	        E1_back1 = sign;
	        cond_trial = E1_trial;
	        E1_wait = wait;
	        E1_revback1 = current_rev;             
	        break;
	     case 5:
	        F1_back1 = sign;
	        cond_trial = F1_trial;
	        F1_wait = wait;
	        F1_revback1 = current_rev;             
	        break;
	     case 6:
	        G1_back1 = sign;
	        cond_trial = G1_trial;
	        G1_wait = wait;
	        G1_revback1 = current_rev;             
	        break;
	     case 7:
	        H1_back1 = sign;
	        cond_trial = H1_trial;
	        H1_wait = wait;
	        H1_revback1 = current_rev;             
	        break;
	     case 8:
	        I1_back1 = sign;
	        cond_trial = I1_trial;
	        I1_wait = wait;
	        I1_revback1 = current_rev;             
	        break;
	     case 9:
	        J1_back1 = sign;
	        cond_trial = J1_trial;
	        J1_wait = wait;
	        J1_revback1 = current_rev;             
	        break;
	     case 10:
	        K1_back1 = sign;
	        cond_trial = K1_trial;
	        K1_wait = wait;
	        K1_revback1 = current_rev;             
	        break;
	     case 11:
	        L1_back1 = sign;
	        cond_trial = L1_trial;
	        L1_wait = wait;
	        L1_revback1 = current_rev;             
	        break;
	     case 12:
	        M1_back1 = sign;
	        cond_trial = M1_trial;
	        M1_wait = wait;
	        M1_revback1 = current_rev;             
	        break;
	     case 13:
	        N1_back1 = sign;
	        cond_trial = N1_trial;
	        N1_wait = wait;
	        N1_revback1 = current_rev;             
	        break;
	     case 14:
	        O1_back1 = sign;
	        cond_trial = O1_trial;
	        O1_wait = wait;
	        O1_revback1 = current_rev;             
	        break;
	     case 15:
	        P1_back1 = sign;
	        cond_trial = P1_trial;
	        P1_wait = wait;
	        P1_revback1 = current_rev;             
	        
	};

	};

	var finish = function() {
		var s = Snap('#svgMain');
	    $("body").unbind("keydown", response_handler); // unbinds keys
	    currentview = new Questionnaire(); 
	    //the variable 'finish' is called when stims.length=0. it then proceeds onto the questionnaire.
	};


	var show_word = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); 
		s.clear();
		//the 'show_word' function presents the stim[0] on the screen, using the snap library for size and font details
	
		var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

	};

	var show_mask = function(text, color) {
		var s = Snap('#svgMain');
		$("body").bind("keydown", response_handler); // Bind keys
		s.clear();
		//var text= '' //this is the mask
		//var q1 = "Did you see a " //this is the first part of the questions
		//var q3 = " or a " // just additional wording
		
		if (stim[11] == '2') {
			var q2 = randomString2()
			var q4 = randomString()
		} else {
			var q2 = randomString()
			var q4 = randomString2()
		}

		//var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		//var question = s.text(240,600,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
		//			   s.text(840,600,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		if (stim[5] == 1) {
			var question = s.text(440,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(440,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 2) {
			var question = s.text(505,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(505,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else if (stim[5] == 3) {
			var question = s.text(565,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(565,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}
		else {
			var question = s.text(632,300,q2).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
					   s.text(632,500,q4).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});
			}

		var randomimage1 = Math.floor(Math.random() * 15);
		var randomimage2 = Math.floor(Math.random() * 15);
		var randomimage3 = Math.floor(Math.random() * 15);
		var randomimage4 = Math.floor(Math.random() * 15);

		var scramble1 = s.image((randomimageset[randomimage1]), 397, 320, 80, 110);
		var scramble2 = s.image((randomimageset[randomimage2]), 460, 320, 80, 110);
		var scramble3 = s.image((randomimageset[randomimage3]), 523, 320, 80, 110);
		var scramble4 = s.image((randomimageset[randomimage4]), 585, 320, 80, 110);

		trialstart = new Date().getTime(); //records date and time

	};



	var show_mask2 = function(text, color) {
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); // Bind keys
		s.clear();
		//var text= '' //this is the mask
		//var q1 = "Did you see a " //this is the first part of the questions
		//var q3 = " or a " // just additional wording
		
		//var presentation = s.text(540,400,text).attr({'fill' : "black",  'stroke': "black", 'stroke-width': 5,'font-size':75});

		var randomimage5 = Math.floor(Math.random() * 15);
		var randomimage6 = Math.floor(Math.random() * 15);
		var randomimage7 = Math.floor(Math.random() * 15);
		var randomimage8 = Math.floor(Math.random() * 15);

		var scramble5 = s.image((randomimageset[randomimage5]), 397, 320, 80, 110);
		var scramble6 = s.image((randomimageset[randomimage6]), 460, 320, 80, 110);
		var scramble7 = s.image((randomimageset[randomimage7]), 523, 320, 80, 110);
		var scramble8 = s.image((randomimageset[randomimage8]), 585, 320, 80, 110);

	};


 	var show_fixation = function(){
		document.body.style.cursor = 'none';
		var event = $(document).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});
		var s = Snap('#svgMain');
		var horizontal = s.line(520,380,560,380);
		horizontal.attr({
		  id:"fix1",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10
		});
		var vertical = s.line(540,360,540,400);
		vertical.attr({
		  id:"fix2",
		  stroke: "rgb(0, 0, 0)", 
		  strokeWidth:10

		});
	};

	var randomString = function() {
    var text = "";
    var possible = "ABCDEFGHIKLMNOPRSTUWY";//all possible incorrect stimuli drawn from presented letters
    for (var stimIndex = 1; stimIndex < 5; stimIndex++) {
    	possible = possible.replace(stim[stimIndex], "")
    }
    text += possible.charAt(Math.floor(Math.random() * possible.length));
	//this is the variable that calls a random letter from the alphabet that isn't contained within the word
  	return text;
    };

    var randomString2 = function() {
    //var randomnumber = Math.floor(Math.random() * 4); // as the random function only calls a 0 or 1, this makes our options 0 to 3
    //var text = stim[randomnumber + 1]; // this adds 1 to the random number as to make the options 1 to 4, as opposed to 0 to 3, to match (stims[1,2,3,4]) which are the letters of the word
    var text = stim[5];

    if (stim[5] == '1'){
    	var text = stim[1]
    }
    if (stim[5] == '2'){
    	var text = stim[2]
    }    
    if (stim[5] == '3'){
    	var text = stim[3]
    }    
    if (stim[5] == '4'){
    	var text = stim[4]
    }
  	return text;
    };


	var ITI = function(){
		var s = Snap('#svgMain');
		$("body").unbind("keydown", response_handler); // unBind keys
		s.clear();
		trial_count++;
		handle7 = setTimeout(function(){
				ifbreak()},500);
	};

	var ifbreak = function(){
		if (trial_count % 120 == 0 && trial_count != 240){
			var s = Snap('#svgMain');
			s.clear();
			var blockbreak = s.image("/static/images/break.png", 280,300);
			document.addEventListener("keypress",nextblock,false);
		}
		else{
			next();
		};
	};

	var nextblock = function(e){
		if (e.keyCode == 32){
			document.removeEventListener("keypress",nextblock,false);
			clearTimeout(handle7);
			next();
		}
	};
	
	// Load the stage.html snippet into the body of the page
	psiTurk.showPage('stage.html');

	// Register the response handler that is defined above to handle any
	// key down events.
	$("body").focus().keydown(response_handler); 


	// Start the test
	next();
};

//************************************************************************//

//************************************************************************//
//setting up the parameters for the staircase

//console.time(randomimageset); 


startdiff = 1335;
var newdiff = startdiff; //define the starting difference
var A1_diff = startdiff; 
var B1_diff = startdiff; 
var C1_diff = startdiff; 
var D1_diff = startdiff; 
var E1_diff = startdiff; 
var F1_diff = startdiff; 
var G1_diff = startdiff; 
var H1_diff = startdiff; 
var I1_diff = startdiff; 
var J1_diff = startdiff; 
var K1_diff = startdiff; 
var L1_diff = startdiff; 
var M1_diff = startdiff; 
var N1_diff = startdiff; 
var O1_diff = startdiff; 
var P1_diff = startdiff; 

var step4 = 5; //Define the size of the stairs
var step2 = 3; //start with bigger stairs and gradually reduce with more reversals
var step1 = 1;//this is to make the staircase more efficient

var trial1 = 0;
var A1_trial = 0, B1_trial = 0, C1_trial = 0, D1_trial = 0, E1_trial = 0, F1_trial = 0, G1_trial = 0, H1_trial = 0, I1_trial = 0, J1_trial = 0, K1_trial = 0, L1_trial = 0, M1_trial = 0, N1_trial = 0, O1_trial = 0, P1_trial = 0; //we will need to keep count of the trial numbers for each condition
var reversals = 0; 
var wait = 0; 
//because it is a two-down one-up staircase, only when there are two consecutively correct trial,
//the staircase will go down. After the first correct trial, we assign the 'wait' variable a value,
//then we wait and see if the next trial is correct or not.
//When the staircase goes down, we will need to reset the wait variable to 0.
var A1_wait = 0, B1_wait = 0, C1_wait = 0, D1_wait = 0, E1_wait = 0, F1_wait = 0, G1_wait = 0, H1_wait = 0, I1_wait = 0, J1_wait = 0, K1_wait = 0, L1_wait = 0, M1_wait = 0, N1_wait = 0, O1_wait = 0, P1_wait = 0; //each condition gets their separate 'wait' variable

var A1_back1 = -1, B1_back1 = -1, C1_back1 = -1, D1_back1 = -1, E1_back1 = -1, F1_back1 = -1, G1_back1 = -1, H1_back1 = -1, I1_back1 = -1, J1_back1 = -1, K1_back1 = -1, L1_back1 = -1, M1_back1 = -1, N1_back1 = -1, O1_back1 = -1, P1_back1 = -1;//this is the sign of the previous trial (trial n-1)

var prev_rev;
var A1_revback1 = 0, B1_revback1 = 0, C1_revback1 = 0, D1_revback1 = 0, E1_revback1 = 0, F1_revback1 = 0, G1_revback1 = 0, H1_revback1 = 0, I1_revback1 = 0, J1_revback1 = 0, K1_revback1 = 0, L1_revback1 = 0, M1_revback1 = 0, N1_revback1 = 0, O1_revback1 = 0, P1_revback1 = 0; //reversal for the previous trial
var sign_back1;
var A1_back1, B1_back1, C1_back1, D1_back1, E1_back1, F1_back1, G1_back1, H1_back1, I1_back1, J1_back1, K1_back1, L1_back1, M1_back1, N1_back1, O1_back1, P1_back1;

var current_rev = 0; //I somehow deleted this line when I was adapting the code. This caused the error in the first correct trial because the variable is not defined

var cond = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var rev_all = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // we use this variable to record the number of reversals for each conditions

//var current_condition = cond[Math.floor(Math.random()*2)]; //This is just a example to pick a random condition

var staircase = function(){
    switch(current_condition){
        case 0:
            newdiff = A1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = A1_trial;
            wait = A1_wait;
            sign_back1 = A1_back1;
            prev_rev = A1_revback1;
            break;
        case 1:
            newdiff = B1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = B1_trial;
            wait = B1_wait;
            sign_back1 = B1_back1;
            prev_rev = B1_revback1;
            break;
        case 2:
            newdiff = C1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = C1_trial;
            wait = C1_wait;
            sign_back1 = C1_back1;
            prev_rev = C1_revback1;
            break;
        case 3:
            newdiff = D1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = D1_trial;
            wait = D1_wait;
            sign_back1 = D1_back1;
            prev_rev = D1_revback1;
            break;
        case 4:
            newdiff = E1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = E1_trial;
            wait = E1_wait;
            sign_back1 = E1_back1;
            prev_rev = E1_revback1;
            break;
        case 5:
            newdiff = F1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = F1_trial;
            wait = F1_wait;
            sign_back1 = F1_back1;
            prev_rev = F1_revback1;
            break;
        case 6:
            newdiff = G1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = G1_trial;
            wait = G1_wait;
            sign_back1 = G1_back1;
            prev_rev = G1_revback1;
            break;
        case 7:
            newdiff = H1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = H1_trial;
            wait = H1_wait;
            sign_back1 = H1_back1;
            prev_rev = H1_revback1;
            break;
        case 8:
            newdiff = I1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = I1_trial;
            wait = I1_wait;
            sign_back1 = I1_back1;
            prev_rev = I1_revback1;
            break;
        case 9:
            newdiff = J1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = J1_trial;
            wait = J1_wait;
            sign_back1 = J1_back1;
            prev_rev = J1_revback1;
            break;
        case 10:
            newdiff = K1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = K1_trial;
            wait = K1_wait;
            sign_back1 = K1_back1;
            prev_rev = K1_revback1;
            break;
        case 11:
            newdiff = L1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = L1_trial;
            wait = L1_wait;
            sign_back1 = L1_back1;
            prev_rev = L1_revback1;
            break;
        case 12:
            newdiff = M1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = M1_trial;
            wait = M1_wait;
            sign_back1 = M1_back1;
            prev_rev = M1_revback1;
            break;
        case 13:
            newdiff = N1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = N1_trial;
            wait = N1_wait;
            sign_back1 = N1_back1;
            prev_rev = N1_revback1;
            break;
        case 14:
            newdiff = O1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = O1_trial;
            wait = O1_wait;
            sign_back1 = O1_back1;
            prev_rev = O1_revback1;
            break;
        case 15:
            newdiff = P1_diff; //we first find the parameters for this condition
            reversals = rev_all[current_condition]; //get the current reversal number
            trial1 = P1_trial;
            wait = P1_wait;
            sign_back1 = P1_back1;
            prev_rev = P1_revback1;
                
    }
    if (trial1 >0) {
        if (wait == 2){ // 'wait' start off as 0, then after the first correct trial, it goes up to 1;
        //after the second correct trial, goes up to 2. When wait ==2, staircase goes down and resets wait to 0
            wait = 0;
            if (reversals < 2) { //within the first few reversals, we adopt a big step size
                newdiff = newdiff-step4;//you could change the number of reversals depending on the task
            }
            else if (reversals < 3){
                newdiff = newdiff-step2;
            }
            else{
                newdiff = newdiff-step1;
            }
        }
        else if (wait == 0){ //when wait ==0, it means the previous trial is wrong and the staircase goes up
            if (reversals < 2) {
                newdiff = newdiff+step4;
            }
            else if (reversals < 3){
                newdiff = newdiff+step2;
            }
            else{
                newdiff = newdiff+step1;
            };
            //reversals ++;
        };

    };
    if (newdiff > 1400){//define the upper and lower bound of the staircase
        newdiff = 1400;
    };
    if (newdiff < 1270){
        newdiff = 1270;
    };


    switch(current_condition){
    //once we decide the stimulus difference of the current trial, 
    //we assign the value to A1_diff/B1_diff... to keep track
        case 0:
            A1_diff=newdiff;
            A1_trial++;
            break;
        case 1:
            B1_diff=newdiff;
            B1_trial++;
            break;
        case 2:
            C1_diff=newdiff;
            C1_trial++;
            break;
        case 3:
            D1_diff=newdiff;
            D1_trial++;
            break;
        case 4:
            E1_diff=newdiff;
            E1_trial++;
            break;
        case 5:
            F1_diff=newdiff;
            F1_trial++;
            break;
        case 6:
            G1_diff=newdiff;
            G1_trial++;
            break;
        case 7:
            H1_diff=newdiff;
            H1_trial++;
            break;
        case 8:
            I1_diff=newdiff;
            I1_trial++;
            break;
        case 9:
            J1_diff=newdiff;
            J1_trial++;
            break;
        case 10:
            K1_diff=newdiff;
            K1_trial++;
            break;
        case 11:
            L1_diff=newdiff;
            L1_trial++;
            break;
        case 12:
            M1_diff=newdiff;
            M1_trial++;
            break;
        case 13:
            N1_diff=newdiff;
            N1_trial++;
            break;
        case 14:
            O1_diff=newdiff;
            O1_trial++;
            break;
        case 15:
            P1_diff=newdiff;
            P1_trial++;
                
    }
    return newdiff;

}
//************************************************************************//

/****************
* Questionnaire *
****************/

var Questionnaire = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);		
		});

	};

	prompt_resubmit = function() {
		document.body.innerHTML = error_message;
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
		reprompt = setTimeout(prompt_resubmit, 10000);
		
		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt); 
                //psiTurk.computeBonus('compute_bonus', function(){
                	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                //}); 


			}, 
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});
	
	$("#next").click(function () {
	    record_responses();
	    psiTurk.saveData({
            success: function(){
                //psiTurk.computeBonus('compute_bonus', function() { 
                	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                //}); 
            }, 
            error: prompt_resubmit});
	});
    
	
};

// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/
$(window).load( function(){
    psiTurk.doInstructions(
    	instructionPages, // a list of pages you want to display in sequence
    	function() { currentview = new Practice1(); } // what you want to do when you are done with instructions
    );
});
