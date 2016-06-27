```c
//simpleGATTprofile.h
#define DIGITAL_INPUT_CHAR_UUID        0xCC00	// Declare a characteristic UUID defined in BIPSO
#define DIGITAL_INPUT_CHAR             0		 // Declare a characteristic value variable


//simpleBLEPeripheral.c
uint8 flags = 0x40;
bool  dInState = readSensorData();    // read sensor data
uint8 counter = 0x00;
bool  dInPolarity = TRUE;
uint8 counterReset[7] = { 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8 appType[7] = { 0x06, 'S', 't', 'r', 'i', 'n', 'g' };
uint8 sensorType[7] = { 0x06, 'S', 't', 'r', 'i', 'n', 'g' };

uint8 dInBuf[25];

dInBuf[0] = flags;
dInBuf[1] = dInState;
dInBuf[2] = counter;
dInBuf[3] = dInPolarity;
osal_memcpy( &dInBuf[4], counterReset, sizeof( counterReset ) );
osal_memcpy( &dInBuf[11], appType, sizeof( appType ) );
osal_memcpy( &dInBuf[18], sensorType, sizeof( sensorType ) );
```