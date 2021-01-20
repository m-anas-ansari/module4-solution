var names=new Array ();
names[0]="Yakoov";
names[1]="Jason";
names[2]="john";
names[3]="John";
names[4]="anas";
names[5]="zahid";
names[6]="Jawad";
names[7]="jawaid";
names[8]="haris";
names[9]="jane";

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}
