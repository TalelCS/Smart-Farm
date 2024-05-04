import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SegmentedArc } from '@shipt/segmented-arc-for-react-native';

const Meter = ({ value, degree}) => {
  const [showArcRanges, setShowArcRanges] = useState(false);

  const segments = [
    {
      scale: 0.25,
      filledColor: '#6E73FF',
      emptyColor: '#F2F3F5',
      data: { label: 'Cold' }
    },
    {
      scale: 0.25,
      filledColor: '#78F5CA',
      emptyColor: '#F2F3F5',
      data: { label: 'Fine' }
    },
    {
      scale: 0.25,
      filledColor: '#F5E478',
      emptyColor: '#F2F3F5',
      data: { label: 'Hot' }
    },
    {
      scale: 0.25,
      filledColor: '#FF746E',
      emptyColor: '#F2F3F5',
      data: { label: 'Extremely Hot' }
    }
  ];

  const ranges = ['10', '20', '30', '40', '50'];

  const _handlePress = () => {
    setShowArcRanges(!showArcRanges);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SegmentedArc
        segments={segments}
        fillValue= {Number(value)}
        isAnimated={false}
        showArcRanges={showArcRanges}
        ranges={ranges}
      >
        {metaData => (
          <Pressable onPress={_handlePress} style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, paddingTop: 16 }}>{metaData.lastFilledSegment.data.label}</Text>
            <Text style={{ lineHeight: 80, fontSize: 24 }}>{value}{degree}</Text>
          </Pressable>
        )}
      </SegmentedArc>
    </View>
  );
};

export default Meter;