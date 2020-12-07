// object for point layer
const selectObj = {
  points: [
      {label:"Total UI Claims",var:"CumClaims",min:"60 Claims",max:"240K",circles:["interpolate",["linear"],["get","CumClaims"],60,5,15077,9,30093,13,60126,17,90159,21,120192,25,150225,29,180258,33,210291,37,240324,41]},
      {label:"Closures/Layoffs",var:"CurrentWarns",min:"0",max:"70+",circles:["interpolate",["linear"],["get","CurrentWarns"],0,1,4.82,5,9.63,9,19.25,13,28.88,17,38.5,21,43.3,25,48.13,29,57.75,33,67.38,37,77,41]},
    ]
}

// object for list of geographies
const geographies = {
  "state"  : ["Georgia"],
  "msa"    : ["Albany, GA","Americus, GA","Athens-Clarke County, GA","Atlanta-Sandy Springs-Alpharetta, GA","Augusta-Richmond County, GA-SC","Bainbridge, GA","Brunswick, GA","Calhoun, GA","Cedartown, GA","Chattanooga, TN-GA","Columbus, GA-AL","Cordele, GA","Cornelia, GA","Dalton, GA","Douglas, GA","Dublin, GA","Eufaula, AL-GA","Fitzgerald, GA","Gainesville, GA","Hinesville, GA","Jefferson, GA","Jesup, GA","LaGrange, GA","Macon-Bibb County, GA","Milledgeville, GA","Moultrie, GA","Rome, GA","St. Marys, GA","Savannah, GA","Statesboro, GA","Summerville, GA","Thomaston, GA","Thomasville, GA","Tifton, GA","Toccoa, GA","Valdosta, GA","Vidalia, GA","Warner Robins, GA","Waycross, GA"],
  "county" : ["Appling County","Atkinson County","Bacon County","Baker County","Baldwin County","Banks County","Barrow County","Bartow County","Ben Hill County","Berrien County","Bibb County","Bleckley County","Brantley County","Brooks County","Bryan County","Bulloch County","Burke County","Butts County","Calhoun County","Camden County","Candler County","Carroll County","Catoosa County","Charlton County","Chatham County","Chattahoochee County","Chattooga County","Cherokee County","Clarke County","Clay County","Clayton County","Clinch County","Cobb County","Coffee County","Colquitt County","Columbia County","Cook County","Coweta County","Crawford County","Crisp County","Dade County","Dawson County","Decatur County","DeKalb County","Dodge County","Dooly County","Dougherty County","Douglas County","Early County","Echols County","Effingham County","Elbert County","Emanuel County","Evans County","Fannin County","Fayette County","Floyd County","Forsyth County","Franklin County","Fulton County","Gilmer County","Glascock County","Glynn County","Gordon County","Grady County","Greene County","Gwinnett County","Habersham County","Hall County","Hancock County","Haralson County","Harris County","Hart County","Heard County","Henry County","Houston County","Irwin County","Jackson County","Jasper County","Jeff Davis County","Jefferson County","Jenkins County","Johnson County","Jones County","Lamar County","Lanier County","Laurens County","Lee County","Liberty County","Lincoln County","Long County","Lowndes County","Lumpkin County","McDuffie County","McIntosh County","Macon County","Madison County","Marion County","Meriwether County","Miller County","Mitchell County","Monroe County","Montgomery County","Morgan County","Murray County","Muscogee County","Newton County","Oconee County","Oglethorpe County","Paulding County","Peach County","Pickens County","Pierce County","Pike County","Polk County","Pulaski County","Putnam County","Quitman County","Rabun County","Randolph County","Richmond County","Rockdale County","Schley County","Screven County","Seminole County","Spalding County","Stephens County","Stewart County","Sumter County","Talbot County","Taliaferro County","Tattnall County","Taylor County","Telfair County","Terrell County","Thomas County","Tift County","Toombs County","Towns County","Treutlen County","Troup County","Turner County","Twiggs County","Union County","Upson County","Walker County","Walton County","Ware County","Warren County","Washington County","Wayne County","Webster County","Wheeler County","White County","Whitfield County","Wilcox County","Wilkes County","Wilkinson County","Worth County"],
  "rc"     : ["ARC","Coastal","CSRA","Georgia Mountains","Heart of Georgia","Middle Georgia","Northeast","Northwest","River Valley","Southern","Southwest","Three Rivers"]
};

// object for kpis
const kpiSelect = {
  "Georgia": {
    "FebLaborForce": "5.19M",
    "CumClaims": "2.54M",
    "PctFebLabor": "49.0%",
    "CurrentWarns": "364"
  },
  "Atlanta-Sandy Springs-Alpharetta, GA": {
    "FebLaborForce": "3.14M",
    "CumClaims": "1.61M",
    "PctFebLabor": "51.2%",
    "CurrentWarns": "216"
  },
  "ARC": {
    "FebLaborForce": "2.47M",
    "CumClaims": "1.31M",
    "PctFebLabor": "52.8%",
    "CurrentWarns": "189"
  },
  "Fulton County": {
    "FebLaborForce": "566K",
    "CumClaims": "342K",
    "PctFebLabor": "60.4%",
    "CurrentWarns": "98"
  },
  "DeKalb County": {
    "FebLaborForce": "406K",
    "CumClaims": "208K",
    "PctFebLabor": "51.2%",
    "CurrentWarns": "0"
  },
  "Gwinnett County": {
    "FebLaborForce": "497K",
    "CumClaims": "245K",
    "PctFebLabor": "49.4%",
    "CurrentWarns": "23"
  },
  "Northwest": {
    "FebLaborForce": "427K",
    "CumClaims": "210K",
    "PctFebLabor": "49.3%",
    "CurrentWarns": "18"
  },
  "Cobb County": {
    "FebLaborForce": "432K",
    "CumClaims": "191K",
    "PctFebLabor": "44.3%",
    "CurrentWarns": "33"
  },
  "Coastal": {
    "FebLaborForce": "333K",
    "CumClaims": "183K",
    "PctFebLabor": "54.9%",
    "CurrentWarns": "31"
  },
  "Northeast": {
    "FebLaborForce": "309K",
    "CumClaims": "146K",
    "PctFebLabor": "47.0%",
    "CurrentWarns": "15"
  },
  "Three Rivers": {
    "FebLaborForce": "254K",
    "CumClaims": "126K",
    "PctFebLabor": "49.7%",
    "CurrentWarns": "11"
  },
  "Georgia Mountains": {
    "FebLaborForce": "356K",
    "CumClaims": "143K",
    "PctFebLabor": "40.3%",
    "CurrentWarns": "17"
  },
  "Savannah, GA": {
    "FebLaborForce": "190K",
    "CumClaims": "114K",
    "PctFebLabor": "60.3%",
    "CurrentWarns": "24"
  },
  "Clayton County": {
    "FebLaborForce": "140K",
    "CumClaims": "92.3K",
    "PctFebLabor": "65.8%",
    "CurrentWarns": "15"
  },
  "Southern": {
    "FebLaborForce": "182K",
    "CumClaims": "84K",
    "PctFebLabor": "46.1%",
    "CurrentWarns": "2"
  },
  "CSRA": {
    "FebLaborForce": "212K",
    "CumClaims": "81.7K",
    "PctFebLabor": "38.6%",
    "CurrentWarns": "20"
  },
  "Middle Georgia": {
    "FebLaborForce": "222K",
    "CumClaims": "90.5K",
    "PctFebLabor": "40.8%",
    "CurrentWarns": "16"
  },
  "River Valley": {
    "FebLaborForce": "149K",
    "CumClaims": "70.9K",
    "PctFebLabor": "47.6%",
    "CurrentWarns": "11"
  },
  "Chatham County": {
    "FebLaborForce": "140K",
    "CumClaims": "92.3K",
    "PctFebLabor": "65.7%",
    "CurrentWarns": "23"
  },
  "Augusta-Richmond County, GA-SC": {
    "FebLaborForce": "184K",
    "CumClaims": "72K",
    "PctFebLabor": "39.2%",
    "CurrentWarns": "19"
  },
  "Columbus, GA-AL": {
    "FebLaborForce": "105K",
    "CumClaims": "52.7K",
    "PctFebLabor": "50.1%",
    "CurrentWarns": "6"
  },
  "Southwest": {
    "FebLaborForce": "151K",
    "CumClaims": "60.5K",
    "PctFebLabor": "40.2%",
    "CurrentWarns": "3"
  },
  "Henry County": {
    "FebLaborForce": "117K",
    "CumClaims": "70.6K",
    "PctFebLabor": "60.1%",
    "CurrentWarns": "4"
  },
  "Muscogee County": {
    "FebLaborForce": "77.8K",
    "CumClaims": "42.3K",
    "PctFebLabor": "54.4%",
    "CurrentWarns": "5"
  },
  "Macon-Bibb County, GA": {
    "FebLaborForce": "104K",
    "CumClaims": "43.8K",
    "PctFebLabor": "42.0%",
    "CurrentWarns": "9"
  },
  "Cherokee County": {
    "FebLaborForce": "138K",
    "CumClaims": "58.1K",
    "PctFebLabor": "42.1%",
    "CurrentWarns": "5"
  },
  "Dalton, GA": {
    "FebLaborForce": "59.2K",
    "CumClaims": "48.5K",
    "PctFebLabor": "81.9%",
    "CurrentWarns": "7"
  },
  "Douglas County": {
    "FebLaborForce": "74.4K",
    "CumClaims": "41.5K",
    "PctFebLabor": "55.8%",
    "CurrentWarns": "5"
  },
  "Heart of Georgia": {
    "FebLaborForce": "118K",
    "CumClaims": "40.3K",
    "PctFebLabor": "34.1%",
    "CurrentWarns": "5"
  },
  "Richmond County": {
    "FebLaborForce": "86K",
    "CumClaims": "39.3K",
    "PctFebLabor": "45.8%",
    "CurrentWarns": "12"
  },
  "Athens-Clarke County, GA": {
    "FebLaborForce": "100K",
    "CumClaims": "46.8K",
    "PctFebLabor": "46.7%",
    "CurrentWarns": "6"
  },
  "Forsyth County": {
    "FebLaborForce": "124K",
    "CumClaims": "46.7K",
    "PctFebLabor": "37.6%",
    "CurrentWarns": "6"
  },
  "Bibb County": {
    "FebLaborForce": "68.6K",
    "CumClaims": "33.4K",
    "PctFebLabor": "48.7%",
    "CurrentWarns": "8"
  },
  "Valdosta, GA": {
    "FebLaborForce": "64.8K",
    "CumClaims": "28.1K",
    "PctFebLabor": "43.3%",
    "CurrentWarns": "1"
  },
  "Albany, GA": {
    "FebLaborForce": "66.5K",
    "CumClaims": "32.2K",
    "PctFebLabor": "48.5%",
    "CurrentWarns": "3"
  },
  "Whitfield County": {
    "FebLaborForce": "43.5K",
    "CumClaims": "36.4K",
    "PctFebLabor": "83.5%",
    "CurrentWarns": "6"
  },
  "Fayette County": {
    "FebLaborForce": "58.9K",
    "CumClaims": "34.4K",
    "PctFebLabor": "58.5%",
    "CurrentWarns": "5"
  },
  "Coweta County": {
    "FebLaborForce": "75.8K",
    "CumClaims": "37.6K",
    "PctFebLabor": "49.5%",
    "CurrentWarns": "5"
  },
  "Gainesville, GA": {
    "FebLaborForce": "104K",
    "CumClaims": "42.4K",
    "PctFebLabor": "40.9%",
    "CurrentWarns": "6"
  },
  "Hall County": {
    "FebLaborForce": "104K",
    "CumClaims": "42.4K",
    "PctFebLabor": "40.9%",
    "CurrentWarns": "6"
  },
  "Warner Robins, GA": {
    "FebLaborForce": "83.4K",
    "CumClaims": "32.3K",
    "PctFebLabor": "38.8%",
    "CurrentWarns": "6"
  },
  "Lowndes County": {
    "FebLaborForce": "51.9K",
    "CumClaims": "24.3K",
    "PctFebLabor": "46.9%",
    "CurrentWarns": "1"
  },
  "Clarke County": {
    "FebLaborForce": "59.9K",
    "CumClaims": "31.3K",
    "PctFebLabor": "52.3%",
    "CurrentWarns": "5"
  },
  "Paulding County": {
    "FebLaborForce": "87.4K",
    "CumClaims": "32.2K",
    "PctFebLabor": "36.8%",
    "CurrentWarns": "2"
  },
  "Columbia County": {
    "FebLaborForce": "75.9K",
    "CumClaims": "24K",
    "PctFebLabor": "31.7%",
    "CurrentWarns": "6"
  },
  "Carroll County": {
    "FebLaborForce": "56.3K",
    "CumClaims": "26.7K",
    "PctFebLabor": "47.4%",
    "CurrentWarns": "4"
  },
  "Houston County": {
    "FebLaborForce": "71.4K",
    "CumClaims": "26.9K",
    "PctFebLabor": "37.6%",
    "CurrentWarns": "4"
  },
  "Rockdale County": {
    "FebLaborForce": "45.5K",
    "CumClaims": "24.2K",
    "PctFebLabor": "53.2%",
    "CurrentWarns": "1"
  },
  "Newton County": {
    "FebLaborForce": "53.1K",
    "CumClaims": "26K",
    "PctFebLabor": "49.0%",
    "CurrentWarns": "2"
  },
  "Floyd County": {
    "FebLaborForce": "44.8K",
    "CumClaims": "24.1K",
    "PctFebLabor": "53.9%",
    "CurrentWarns": "2"
  },
  "Rome, GA": {
    "FebLaborForce": "44.8K",
    "CumClaims": "24.1K",
    "PctFebLabor": "53.9%",
    "CurrentWarns": "2"
  },
  "Bartow County": {
    "FebLaborForce": "51.5K",
    "CumClaims": "29.7K",
    "PctFebLabor": "57.7%",
    "CurrentWarns": "5"
  },
  "Brunswick, GA": {
    "FebLaborForce": "52.6K",
    "CumClaims": "28.3K",
    "PctFebLabor": "53.8%",
    "CurrentWarns": "4"
  },
  "LaGrange, GA-AL": {
    "FebLaborForce": "37.8K",
    "CumClaims": "22.4K",
    "PctFebLabor": "59.2%",
    "CurrentWarns": "1"
  },
  "Troup County": {
    "FebLaborForce": "37.8K",
    "CumClaims": "22.4K",
    "PctFebLabor": "59.2%",
    "CurrentWarns": "1"
  },
  "Bulloch County": {
    "FebLaborForce": "37K",
    "CumClaims": "18.5K",
    "PctFebLabor": "50.1%",
    "CurrentWarns": "0"
  },
  "Statesboro, GA": {
    "FebLaborForce": "37K",
    "CumClaims": "18.5K",
    "PctFebLabor": "50.1%",
    "CurrentWarns": "0"
  },
  "Dougherty County": {
    "FebLaborForce": "38.9K",
    "CumClaims": "19.2K",
    "PctFebLabor": "49.5%",
    "CurrentWarns": "3"
  },
  "Glynn County": {
    "FebLaborForce": "39.1K",
    "CumClaims": "22.9K",
    "PctFebLabor": "58.5%",
    "CurrentWarns": "4"
  },
  "Barrow County": {
    "FebLaborForce": "41.1K",
    "CumClaims": "20K",
    "PctFebLabor": "48.7%",
    "CurrentWarns": "1"
  },
  "Douglas, GA": {
    "FebLaborForce": "24.4K",
    "CumClaims": "13.8K",
    "PctFebLabor": "56.6%",
    "CurrentWarns": "0"
  },
  "Chattanooga, TN-GA": {
    "FebLaborForce": "74.5K",
    "CumClaims": "20.3K",
    "PctFebLabor": "27.2%",
    "CurrentWarns": "0"
  },
  "Jackson County": {
    "FebLaborForce": "37K",
    "CumClaims": "17.7K",
    "PctFebLabor": "47.7%",
    "CurrentWarns": "4"
  },
  "Jefferson, GA": {
    "FebLaborForce": "37K",
    "CumClaims": "17.7K",
    "PctFebLabor": "47.7%",
    "CurrentWarns": "4"
  },
  "Hinesville, GA": {
    "FebLaborForce": "35.1K",
    "CumClaims": "14.1K",
    "PctFebLabor": "40.1%",
    "CurrentWarns": "2"
  },
  "Walton County": {
    "FebLaborForce": "46.8K",
    "CumClaims": "21.7K",
    "PctFebLabor": "46.5%",
    "CurrentWarns": "0"
  },
  "Gordon County": {
    "FebLaborForce": "28.5K",
    "CumClaims": "15.9K",
    "PctFebLabor": "55.9%",
    "CurrentWarns": "0"
  },
  "Calhoun, GA": {
    "FebLaborForce": "28.5K",
    "CumClaims": "15.9K",
    "PctFebLabor": "55.9%",
    "CurrentWarns": "0"
  },
  "Spalding County": {
    "FebLaborForce": "29.2K",
    "CumClaims": "14.1K",
    "PctFebLabor": "48.4%",
    "CurrentWarns": "0"
  },
  "Liberty County": {
    "FebLaborForce": "26.7K",
    "CumClaims": "11.5K",
    "PctFebLabor": "43.1%",
    "CurrentWarns": "2"
  },
  "Murray County": {
    "FebLaborForce": "15.6K",
    "CumClaims": "12.1K",
    "PctFebLabor": "77.4%",
    "CurrentWarns": "1"
  },
  "Effingham County": {
    "FebLaborForce": "31.1K",
    "CumClaims": "12.3K",
    "PctFebLabor": "39.5%",
    "CurrentWarns": "1"
  },
  "Lee County": {
    "FebLaborForce": "15K",
    "CumClaims": "9.29K",
    "PctFebLabor": "62.1%",
    "CurrentWarns": "0"
  },
  "Waycross, GA": {
    "FebLaborForce": "24.7K",
    "CumClaims": "8.24K",
    "PctFebLabor": "33.4%",
    "CurrentWarns": "1"
  },
  "Dublin, GA": {
    "FebLaborForce": "25.9K",
    "CumClaims": "9.95K",
    "PctFebLabor": "38.4%",
    "CurrentWarns": "1"
  },
  "Milledgeville, GA": {
    "FebLaborForce": "20.4K",
    "CumClaims": "9.27K",
    "PctFebLabor": "45.5%",
    "CurrentWarns": "0"
  },
  "Bryan County": {
    "FebLaborForce": "18.4K",
    "CumClaims": "9.94K",
    "PctFebLabor": "54.1%",
    "CurrentWarns": "0"
  },
  "Tift County": {
    "FebLaborForce": "20.3K",
    "CumClaims": "7.72K",
    "PctFebLabor": "38.0%",
    "CurrentWarns": "0"
  },
  "Baldwin County": {
    "FebLaborForce": "17.8K",
    "CumClaims": "8.07K",
    "PctFebLabor": "45.3%",
    "CurrentWarns": "0"
  },
  "Tifton, GA": {
    "FebLaborForce": "20.3K",
    "CumClaims": "7.72K",
    "PctFebLabor": "38.0%",
    "CurrentWarns": "0"
  },
  "Atkinson County": {
    "FebLaborForce": "5.15K",
    "CumClaims": "7.3K",
    "PctFebLabor": "141.8%",
    "CurrentWarns": "0"
  },
  "Coffee County": {
    "FebLaborForce": "19.3K",
    "CumClaims": "6.53K",
    "PctFebLabor": "33.8%",
    "CurrentWarns": "0"
  },
  "Laurens County": {
    "FebLaborForce": "19.1K",
    "CumClaims": "8.14K",
    "PctFebLabor": "42.5%",
    "CurrentWarns": "1"
  },
  "Harris County": {
    "FebLaborForce": "16.8K",
    "CumClaims": "6.8K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "0"
  },
  "Crisp County": {
    "FebLaborForce": "9.65K",
    "CumClaims": "6.57K",
    "PctFebLabor": "68.0%",
    "CurrentWarns": "2"
  },
  "Cordele, GA": {
    "FebLaborForce": "9.65K",
    "CumClaims": "6.57K",
    "PctFebLabor": "68.0%",
    "CurrentWarns": "2"
  },
  "Walker County": {
    "FebLaborForce": "32K",
    "CumClaims": "10.6K",
    "PctFebLabor": "33.3%",
    "CurrentWarns": "0"
  },
  "Cedartown, GA": {
    "FebLaborForce": "18.6K",
    "CumClaims": "9.13K",
    "PctFebLabor": "49.0%",
    "CurrentWarns": "0"
  },
  "Polk County": {
    "FebLaborForce": "18.6K",
    "CumClaims": "9.13K",
    "PctFebLabor": "49.0%",
    "CurrentWarns": "0"
  },
  "Vidalia, GA": {
    "FebLaborForce": "15.7K",
    "CumClaims": "6.67K",
    "PctFebLabor": "42.5%",
    "CurrentWarns": "1"
  },
  "Ware County": {
    "FebLaborForce": "15.8K",
    "CumClaims": "5.21K",
    "PctFebLabor": "32.9%",
    "CurrentWarns": "1"
  },
  "Colquitt County": {
    "FebLaborForce": "22K",
    "CumClaims": "6.93K",
    "PctFebLabor": "31.5%",
    "CurrentWarns": "0"
  },
  "Moultrie, GA": {
    "FebLaborForce": "22K",
    "CumClaims": "6.93K",
    "PctFebLabor": "31.5%",
    "CurrentWarns": "0"
  },
  "Thomas County": {
    "FebLaborForce": "16.6K",
    "CumClaims": "6.93K",
    "PctFebLabor": "41.8%",
    "CurrentWarns": "0"
  },
  "Thomasville, GA": {
    "FebLaborForce": "16.6K",
    "CumClaims": "6.93K",
    "PctFebLabor": "41.8%",
    "CurrentWarns": "0"
  },
  "Thomaston, GA": {
    "FebLaborForce": "11.6K",
    "CumClaims": "5.68K",
    "PctFebLabor": "49.1%",
    "CurrentWarns": "0"
  },
  "Upson County": {
    "FebLaborForce": "11.6K",
    "CumClaims": "5.68K",
    "PctFebLabor": "49.1%",
    "CurrentWarns": "0"
  },
  "Pickens County": {
    "FebLaborForce": "15.5K",
    "CumClaims": "6.25K",
    "PctFebLabor": "40.2%",
    "CurrentWarns": "0"
  },
  "Catoosa County": {
    "FebLaborForce": "34.2K",
    "CumClaims": "7.62K",
    "PctFebLabor": "22.3%",
    "CurrentWarns": "0"
  },
  "Madison County": {
    "FebLaborForce": "13.5K",
    "CumClaims": "6.29K",
    "PctFebLabor": "46.7%",
    "CurrentWarns": "0"
  },
  "Chattooga County": {
    "FebLaborForce": "10.4K",
    "CumClaims": "7.26K",
    "PctFebLabor": "70.0%",
    "CurrentWarns": "1"
  },
  "Summerville, GA": {
    "FebLaborForce": "10.4K",
    "CumClaims": "7.26K",
    "PctFebLabor": "70.0%",
    "CurrentWarns": "1"
  },
  "St. Marys, GA": {
    "FebLaborForce": "21K",
    "CumClaims": "7.7K",
    "PctFebLabor": "36.6%",
    "CurrentWarns": "1"
  },
  "Camden County": {
    "FebLaborForce": "21K",
    "CumClaims": "7.7K",
    "PctFebLabor": "36.6%",
    "CurrentWarns": "1"
  },
  "Bainbridge, GA": {
    "FebLaborForce": "11.9K",
    "CumClaims": "4.2K",
    "PctFebLabor": "35.3%",
    "CurrentWarns": "0"
  },
  "Decatur County": {
    "FebLaborForce": "11.9K",
    "CumClaims": "4.2K",
    "PctFebLabor": "35.3%",
    "CurrentWarns": "0"
  },
  "Lumpkin County": {
    "FebLaborForce": "16.9K",
    "CumClaims": "6.81K",
    "PctFebLabor": "40.3%",
    "CurrentWarns": "1"
  },
  "Oconee County": {
    "FebLaborForce": "19.8K",
    "CumClaims": "7K",
    "PctFebLabor": "35.4%",
    "CurrentWarns": "1"
  },
  "Ben Hill County": {
    "FebLaborForce": "5.36K",
    "CumClaims": "6.97K",
    "PctFebLabor": "130.1%",
    "CurrentWarns": "0"
  },
  "Fitzgerald, GA": {
    "FebLaborForce": "5.36K",
    "CumClaims": "6.97K",
    "PctFebLabor": "130.1%",
    "CurrentWarns": "0"
  },
  "Habersham County": {
    "FebLaborForce": "19.2K",
    "CumClaims": "7.07K",
    "PctFebLabor": "36.8%",
    "CurrentWarns": "0"
  },
  "Cornelia, GA": {
    "FebLaborForce": "19.2K",
    "CumClaims": "7.07K",
    "PctFebLabor": "36.8%",
    "CurrentWarns": "0"
  },
  "Peach County": {
    "FebLaborForce": "12K",
    "CumClaims": "5.49K",
    "PctFebLabor": "45.6%",
    "CurrentWarns": "2"
  },
  "Wayne County": {
    "FebLaborForce": "11.4K",
    "CumClaims": "4.76K",
    "PctFebLabor": "41.8%",
    "CurrentWarns": "0"
  },
  "Jesup, GA": {
    "FebLaborForce": "11.4K",
    "CumClaims": "4.76K",
    "PctFebLabor": "41.8%",
    "CurrentWarns": "0"
  },
  "Haralson County": {
    "FebLaborForce": "12.8K",
    "CumClaims": "6.46K",
    "PctFebLabor": "50.6%",
    "CurrentWarns": "0"
  },
  "Butts County": {
    "FebLaborForce": "10.9K",
    "CumClaims": "5.82K",
    "PctFebLabor": "53.2%",
    "CurrentWarns": "0"
  },
  "Franklin County": {
    "FebLaborForce": "10.1K",
    "CumClaims": "5.79K",
    "PctFebLabor": "57.4%",
    "CurrentWarns": "0"
  },
  "Meriwether County": {
    "FebLaborForce": "9.05K",
    "CumClaims": "4.78K",
    "PctFebLabor": "52.8%",
    "CurrentWarns": "0"
  },
  "Toombs County": {
    "FebLaborForce": "11.8K",
    "CumClaims": "4.84K",
    "PctFebLabor": "40.9%",
    "CurrentWarns": "1"
  },
  "Americus, GA": {
    "FebLaborForce": "15.3K",
    "CumClaims": "4.54K",
    "PctFebLabor": "29.6%",
    "CurrentWarns": "2"
  },
  "McDuffie County": {
    "FebLaborForce": "8.97K",
    "CumClaims": "4.12K",
    "PctFebLabor": "46.0%",
    "CurrentWarns": "1"
  },
  "Dawson County": {
    "FebLaborForce": "12.5K",
    "CumClaims": "6.59K",
    "PctFebLabor": "52.7%",
    "CurrentWarns": "1"
  },
  "Emanuel County": {
    "FebLaborForce": "8.45K",
    "CumClaims": "2.87K",
    "PctFebLabor": "34.0%",
    "CurrentWarns": "0"
  },
  "Sumter County": {
    "FebLaborForce": "13.1K",
    "CumClaims": "4.1K",
    "PctFebLabor": "31.4%",
    "CurrentWarns": "2"
  },
  "Gilmer County": {
    "FebLaborForce": "11.9K",
    "CumClaims": "5.5K",
    "PctFebLabor": "46.3%",
    "CurrentWarns": "1"
  },
  "Burke County": {
    "FebLaborForce": "9.32K",
    "CumClaims": "3.38K",
    "PctFebLabor": "36.3%",
    "CurrentWarns": "0"
  },
  "Banks County": {
    "FebLaborForce": "9.9K",
    "CumClaims": "4.56K",
    "PctFebLabor": "46.1%",
    "CurrentWarns": "1"
  },
  "Clinch County": {
    "FebLaborForce": "2.64K",
    "CumClaims": "3.96K",
    "PctFebLabor": "149.8%",
    "CurrentWarns": "0"
  },
  "Fannin County": {
    "FebLaborForce": "11.5K",
    "CumClaims": "5.08K",
    "PctFebLabor": "44.1%",
    "CurrentWarns": "0"
  },
  "Cook County": {
    "FebLaborForce": "8.22K",
    "CumClaims": "3.03K",
    "PctFebLabor": "36.8%",
    "CurrentWarns": "0"
  },
  "White County": {
    "FebLaborForce": "16.5K",
    "CumClaims": "5.98K",
    "PctFebLabor": "36.3%",
    "CurrentWarns": "1"
  },
  "Monroe County": {
    "FebLaborForce": "13.2K",
    "CumClaims": "4.06K",
    "PctFebLabor": "30.8%",
    "CurrentWarns": "0"
  },
  "Jones County": {
    "FebLaborForce": "13.9K",
    "CumClaims": "3.58K",
    "PctFebLabor": "25.8%",
    "CurrentWarns": "0"
  },
  "Brooks County": {
    "FebLaborForce": "7.13K",
    "CumClaims": "2.16K",
    "PctFebLabor": "30.3%",
    "CurrentWarns": "0"
  },
  "Elbert County": {
    "FebLaborForce": "7.75K",
    "CumClaims": "3.6K",
    "PctFebLabor": "46.4%",
    "CurrentWarns": "0"
  },
  "Pike County": {
    "FebLaborForce": "9.05K",
    "CumClaims": "3.39K",
    "PctFebLabor": "37.5%",
    "CurrentWarns": "1"
  },
  "Putnam County": {
    "FebLaborForce": "8.27K",
    "CumClaims": "4.08K",
    "PctFebLabor": "49.3%",
    "CurrentWarns": "1"
  },
  "Lamar County": {
    "FebLaborForce": "8.41K",
    "CumClaims": "3.23K",
    "PctFebLabor": "38.3%",
    "CurrentWarns": "0"
  },
  "Toccoa, GA": {
    "FebLaborForce": "10.7K",
    "CumClaims": "5.16K",
    "PctFebLabor": "48.2%",
    "CurrentWarns": "0"
  },
  "Stephens County": {
    "FebLaborForce": "10.7K",
    "CumClaims": "5.16K",
    "PctFebLabor": "48.2%",
    "CurrentWarns": "0"
  },
  "Berrien County": {
    "FebLaborForce": "7.71K",
    "CumClaims": "3.58K",
    "PctFebLabor": "46.5%",
    "CurrentWarns": "0"
  },
  "Pierce County": {
    "FebLaborForce": "8.83K",
    "CumClaims": "3.02K",
    "PctFebLabor": "34.2%",
    "CurrentWarns": "0"
  },
  "Screven County": {
    "FebLaborForce": "5.11K",
    "CumClaims": "3.14K",
    "PctFebLabor": "61.5%",
    "CurrentWarns": "0"
  },
  "Hart County": {
    "FebLaborForce": "11.2K",
    "CumClaims": "3.6K",
    "PctFebLabor": "32.2%",
    "CurrentWarns": "0"
  },
  "Long County": {
    "FebLaborForce": "8.36K",
    "CumClaims": "2.56K",
    "PctFebLabor": "30.6%",
    "CurrentWarns": "0"
  },
  "Brantley County": {
    "FebLaborForce": "7.25K",
    "CumClaims": "3.06K",
    "PctFebLabor": "42.2%",
    "CurrentWarns": "0"
  },
  "Union County": {
    "FebLaborForce": "10.4K",
    "CumClaims": "3.89K",
    "PctFebLabor": "37.4%",
    "CurrentWarns": "0"
  },
  "Dodge County": {
    "FebLaborForce": "7.06K",
    "CumClaims": "2.42K",
    "PctFebLabor": "34.3%",
    "CurrentWarns": "1"
  },
  "Jefferson County": {
    "FebLaborForce": "6.76K",
    "CumClaims": "2.37K",
    "PctFebLabor": "35.0%",
    "CurrentWarns": "1"
  },
  "Greene County": {
    "FebLaborForce": "7K",
    "CumClaims": "3.49K",
    "PctFebLabor": "49.8%",
    "CurrentWarns": "2"
  },
  "Worth County": {
    "FebLaborForce": "9.09K",
    "CumClaims": "2.5K",
    "PctFebLabor": "27.5%",
    "CurrentWarns": "0"
  },
  "Tattnall County": {
    "FebLaborForce": "9.81K",
    "CumClaims": "2.04K",
    "PctFebLabor": "20.8%",
    "CurrentWarns": "0"
  },
  "Mitchell County": {
    "FebLaborForce": "8.79K",
    "CumClaims": "2.2K",
    "PctFebLabor": "25.1%",
    "CurrentWarns": "0"
  },
  "Morgan County": {
    "FebLaborForce": "9.43K",
    "CumClaims": "3.91K",
    "PctFebLabor": "41.5%",
    "CurrentWarns": "0"
  },
  "Washington County": {
    "FebLaborForce": "7.07K",
    "CumClaims": "2.26K",
    "PctFebLabor": "32.0%",
    "CurrentWarns": "0"
  },
  "Jasper County": {
    "FebLaborForce": "7.06K",
    "CumClaims": "2.38K",
    "PctFebLabor": "33.7%",
    "CurrentWarns": "0"
  },
  "Grady County": {
    "FebLaborForce": "10.6K",
    "CumClaims": "2.71K",
    "PctFebLabor": "25.5%",
    "CurrentWarns": "0"
  },
  "Calhoun County": {
    "FebLaborForce": "2.38K",
    "CumClaims": "2.03K",
    "PctFebLabor": "85.1%",
    "CurrentWarns": "0"
  },
  "Heard County": {
    "FebLaborForce": "5.36K",
    "CumClaims": "2.27K",
    "PctFebLabor": "42.4%",
    "CurrentWarns": "0"
  },
  "Bacon County": {
    "FebLaborForce": "5.06K",
    "CumClaims": "1.9K",
    "PctFebLabor": "37.5%",
    "CurrentWarns": "0"
  },
  "McIntosh County": {
    "FebLaborForce": "6.21K",
    "CumClaims": "2.34K",
    "PctFebLabor": "37.7%",
    "CurrentWarns": "0"
  },
  "Macon County": {
    "FebLaborForce": "4.84K",
    "CumClaims": "2.02K",
    "PctFebLabor": "41.7%",
    "CurrentWarns": "0"
  },
  "Montgomery County": {
    "FebLaborForce": "3.86K",
    "CumClaims": "1.83K",
    "PctFebLabor": "47.5%",
    "CurrentWarns": "0"
  },
  "Candler County": {
    "FebLaborForce": "5.72K",
    "CumClaims": "1.79K",
    "PctFebLabor": "31.3%",
    "CurrentWarns": "0"
  },
  "Appling County": {
    "FebLaborForce": "9.9K",
    "CumClaims": "2.6K",
    "PctFebLabor": "26.3%",
    "CurrentWarns": "1"
  },
  "Rabun County": {
    "FebLaborForce": "6.95K",
    "CumClaims": "2.93K",
    "PctFebLabor": "42.2%",
    "CurrentWarns": "0"
  },
  "Dade County": {
    "FebLaborForce": "8.34K",
    "CumClaims": "2.04K",
    "PctFebLabor": "24.4%",
    "CurrentWarns": "0"
  },
  "Early County": {
    "FebLaborForce": "4.55K",
    "CumClaims": "1.2K",
    "PctFebLabor": "26.5%",
    "CurrentWarns": "0"
  },
  "Oglethorpe County": {
    "FebLaborForce": "7.08K",
    "CumClaims": "2.14K",
    "PctFebLabor": "30.3%",
    "CurrentWarns": "0"
  },
  "Evans County": {
    "FebLaborForce": "4.98K",
    "CumClaims": "1.54K",
    "PctFebLabor": "31.0%",
    "CurrentWarns": "0"
  },
  "Chattahoochee County": {
    "FebLaborForce": "2.02K",
    "CumClaims": "1.22K",
    "PctFebLabor": "60.3%",
    "CurrentWarns": "1"
  },
  "Crawford County": {
    "FebLaborForce": "5.69K",
    "CumClaims": "1.88K",
    "PctFebLabor": "33.0%",
    "CurrentWarns": "1"
  },
  "Jeff Davis County": {
    "FebLaborForce": "6.14K",
    "CumClaims": "2.06K",
    "PctFebLabor": "33.7%",
    "CurrentWarns": "0"
  },
  "Terrell County": {
    "FebLaborForce": "3.55K",
    "CumClaims": "1.2K",
    "PctFebLabor": "33.7%",
    "CurrentWarns": "0"
  },
  "Dooly County": {
    "FebLaborForce": "5.19K",
    "CumClaims": "1.39K",
    "PctFebLabor": "26.7%",
    "CurrentWarns": "0"
  },
  "Turner County": {
    "FebLaborForce": "3.23K",
    "CumClaims": "1.28K",
    "PctFebLabor": "39.5%",
    "CurrentWarns": "0"
  },
  "Jenkins County": {
    "FebLaborForce": "3.13K",
    "CumClaims": "1.08K",
    "PctFebLabor": "34.5%",
    "CurrentWarns": "0"
  },
  "Talbot County": {
    "FebLaborForce": "2.83K",
    "CumClaims": "916",
    "PctFebLabor": "32.4%",
    "CurrentWarns": "0"
  },
  "Charlton County": {
    "FebLaborForce": "4.89K",
    "CumClaims": "1.4K",
    "PctFebLabor": "28.6%",
    "CurrentWarns": "0"
  },
  "Telfair County": {
    "FebLaborForce": "4.2K",
    "CumClaims": "1.02K",
    "PctFebLabor": "24.3%",
    "CurrentWarns": "1"
  },
  "Johnson County": {
    "FebLaborForce": "4.06K",
    "CumClaims": "1.01K",
    "PctFebLabor": "24.8%",
    "CurrentWarns": "0"
  },
  "Hancock County": {
    "FebLaborForce": "2.55K",
    "CumClaims": "1.2K",
    "PctFebLabor": "47.0%",
    "CurrentWarns": "0"
  },
  "Bleckley County": {
    "FebLaborForce": "4.58K",
    "CumClaims": "1.44K",
    "PctFebLabor": "31.4%",
    "CurrentWarns": "0"
  },
  "Lincoln County": {
    "FebLaborForce": "3.64K",
    "CumClaims": "1.14K",
    "PctFebLabor": "31.3%",
    "CurrentWarns": "0"
  },
  "Marion County": {
    "FebLaborForce": "3.34K",
    "CumClaims": "1.02K",
    "PctFebLabor": "30.5%",
    "CurrentWarns": "0"
  },
  "Wilkes County": {
    "FebLaborForce": "3.89K",
    "CumClaims": "1.09K",
    "PctFebLabor": "27.9%",
    "CurrentWarns": "0"
  },
  "Lanier County": {
    "FebLaborForce": "3.8K",
    "CumClaims": "1.01K",
    "PctFebLabor": "26.7%",
    "CurrentWarns": "0"
  },
  "Towns County": {
    "FebLaborForce": "3.87K",
    "CumClaims": "1.87K",
    "PctFebLabor": "48.5%",
    "CurrentWarns": "1"
  },
  "Taylor County": {
    "FebLaborForce": "3.26K",
    "CumClaims": "986",
    "PctFebLabor": "30.3%",
    "CurrentWarns": "0"
  },
  "Twiggs County": {
    "FebLaborForce": "2.93K",
    "CumClaims": "930",
    "PctFebLabor": "31.7%",
    "CurrentWarns": "0"
  },
  "Randolph County": {
    "FebLaborForce": "2.62K",
    "CumClaims": "1.42K",
    "PctFebLabor": "54.1%",
    "CurrentWarns": "0"
  },
  "Wilkinson County": {
    "FebLaborForce": "4.05K",
    "CumClaims": "1.19K",
    "PctFebLabor": "29.5%",
    "CurrentWarns": "0"
  },
  "Warren County": {
    "FebLaborForce": "2.9K",
    "CumClaims": "980",
    "PctFebLabor": "33.8%",
    "CurrentWarns": "0"
  },
  "Treutlen County": {
    "FebLaborForce": "2.68K",
    "CumClaims": "802",
    "PctFebLabor": "29.9%",
    "CurrentWarns": "0"
  },
  "Clay County": {
    "FebLaborForce": "910",
    "CumClaims": "954",
    "PctFebLabor": "104.8%",
    "CurrentWarns": "1"
  },
  "Seminole County": {
    "FebLaborForce": "3.12K",
    "CumClaims": "899",
    "PctFebLabor": "28.8%",
    "CurrentWarns": "0"
  },
  "Pulaski County": {
    "FebLaborForce": "4.14K",
    "CumClaims": "1.01K",
    "PctFebLabor": "24.3%",
    "CurrentWarns": "0"
  },
  "Glascock County": {
    "FebLaborForce": "1.31K",
    "CumClaims": "515",
    "PctFebLabor": "39.4%",
    "CurrentWarns": "0"
  },
  "Irwin County": {
    "FebLaborForce": "3.45K",
    "CumClaims": "929",
    "PctFebLabor": "26.9%",
    "CurrentWarns": "0"
  },
  "Echols County": {
    "FebLaborForce": "2K",
    "CumClaims": "592",
    "PctFebLabor": "29.6%",
    "CurrentWarns": "0"
  },
  "Wilcox County": {
    "FebLaborForce": "2.75K",
    "CumClaims": "581",
    "PctFebLabor": "21.1%",
    "CurrentWarns": "0"
  },
  "Stewart County": {
    "FebLaborForce": "2.46K",
    "CumClaims": "490",
    "PctFebLabor": "19.9%",
    "CurrentWarns": "0"
  },
  "Wheeler County": {
    "FebLaborForce": "1.66K",
    "CumClaims": "508",
    "PctFebLabor": "30.5%",
    "CurrentWarns": "0"
  },
  "Miller County": {
    "FebLaborForce": "2.85K",
    "CumClaims": "632",
    "PctFebLabor": "22.2%",
    "CurrentWarns": "0"
  },
  "Baker County": {
    "FebLaborForce": "1.23K",
    "CumClaims": "536",
    "PctFebLabor": "43.6%",
    "CurrentWarns": "0"
  },
  "Schley County": {
    "FebLaborForce": "2.25K",
    "CumClaims": "437",
    "PctFebLabor": "19.4%",
    "CurrentWarns": "0"
  },
  "Webster County": {
    "FebLaborForce": "1.04K",
    "CumClaims": "188",
    "PctFebLabor": "18.0%",
    "CurrentWarns": "0"
  },
  "Taliaferro County": {
    "FebLaborForce": "581",
    "CumClaims": "212",
    "PctFebLabor": "36.5%",
    "CurrentWarns": "0"
  },
  "Eufaula, AL-GA": {
    "FebLaborForce": "797",
    "CumClaims": "92",
    "PctFebLabor": "11.5%",
    "CurrentWarns": "0"
  },
  "Quitman County": {
    "FebLaborForce": "797",
    "CumClaims": "92",
    "PctFebLabor": "11.5%",
    "CurrentWarns": "0"
  }
}