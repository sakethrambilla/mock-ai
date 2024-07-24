// components/Settings.tsx
"use client"; // components/Setting// components/Settings.tsx

import { Select } from "@/components/ui/select";
import { useState, useEffect } from "react";

import { SingleValue } from "react-select";

interface DeviceOption {
  value: string;
  label: string;
}

const Settings: React.FC = () => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDevice, setSelectedDevice] =
    useState<SingleValue<DeviceOption>>(null);

  useEffect(() => {
    // Get the list of audio input devices
    navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {
      console.log(deviceInfos);
      const audioInputs = deviceInfos.filter(
        (device) => device.kind === "audioinput",
      );
      console.log(audioInputs);
      setDevices(audioInputs);
      console.log(devices);
    });
  }, []);

  const handleDeviceChange = (selectedOption: SingleValue<DeviceOption>) => {
    setSelectedDevice(selectedOption);
    if (selectedOption) {
      const constraints = {
        audio: { deviceId: { exact: selectedOption.value } },
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          // Use the stream with the selected microphone
          console.log("Stream obtained: ", stream);
        })
        .catch((error) => {
          console.error("Error accessing media devices.", error);
        });
    }
  };

  const options = devices.map((device) => ({
    value: device.deviceId,
    label: device.label || `Microphone ${device.deviceId}`,
  }));

  return (
    <div className="mx-auto max-w-md rounded-lg bg-gray-100 p-4 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Settings</h2>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Select Microphone
      </label>
      {/* <Select
        value={selectedDevice}
        onChange={handleDeviceChange}
        options={options}
        className="basic-single"
        classNamePrefix="select"
      /> */}
    </div>
  );
};

export default Settings;
