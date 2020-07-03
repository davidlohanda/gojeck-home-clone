import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const IconWithText = ({title}) => {
    return (
        <View style={[{ alignItems: 'center' }]}>
            <View style={[{ width: 60, height: 60, backgroundColor: 'green', borderRadius: 30 }]}></View>
            <Text style={[{ marginTop: 10, maxWidth: 70, textAlign: 'center' }]}>{title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View style={[{ width: 35, height: 35, borderRadius: 18, backgroundColor: 'white' }]}>
        </View>
    )
}

class ScanQrCode extends React.Component {
      takePicture = async () => {
            if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            }
        };
    render() {
        return (
            <View style={[{ flex: 1 }]}>
            <RNCamera
                ref={(ref) => {
                    this.camera = ref;
                }}
                style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                }]}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
                />
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={[{ flex: 0, backgroundColor: '#fff', borderRadius: 5, padding: 15, paddingHorizontal: 20, alignSelf: 'center', margin: 20 }]}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 16, position: 'absolute', top: 12, left: 0, width: '100%'  }]}>
                    <IconAction />
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', width: 80 }]}>
                        <IconAction />
                        <IconAction />
                    </View>
                </View>
                <View style={[{ height: 250, paddingHorizontal: 16, backgroundColor: 'white' }]}>
                    <View style={[{ alignItems: 'center', marginTop: 8, marginBottom: 18 }]}>
                        <View style={[{ width: 60, height: 5, backgroundColor: '#e0e0e0', marginVertical: 1 }]}></View>
                        <View style={[{ width: 60, height: 5, backgroundColor: '#e0e0e0', marginVertical: 1 }]}></View>
                    </View>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <Text style={[{ fontSize: 24, fontWeight: 'bold', color: 'black' }]}>More Options</Text>
                        <Text style={[{ fontSize: 14, fontWeight: 'bold', color: 'green' }]}>SHORTCUT</Text>
                    </View>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }]}>
                        <View style={[{ flexDirection: 'row', paddingRight: 10 }]}>
                            <IconWithText title="Phone Number" />
                            <IconWithText title="GoPay Code" />
                        </View>
                        <View style={[{ width: 1, height: 60, backgroundColor: 'grey' }]} />
                        <View style={[{ flex: 1, paddingLeft: 12 }]}>
                            <Text>Your recent GoPay receivers will show here. No admin fees!</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ScanQrCode;
