import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import {ClusterMap, ClusterMapShape} from 'atoms';
import {selectMapMarkers, selectBounds} from 'core/selectors';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button as CustomButton} from 'atoms';
import {styles} from './styles';
import {IObject} from 'core/types';
import {IState} from 'core/store';

export const AppMap = () => {
  const bounds = useSelector(selectBounds);
  const [selected, setSelected] = useState<IObject | null>(null);
  const markers = useSelector((state: IState) =>
    selectMapMarkers(state, selected),
  );

  const bs = useRef<BottomSheet>(null);
  const rendnerInner = () => {
    return (
      <View style={styles.bottomMenuContainer}>
        <Text style={styles.bottomMenuText}>{selected?.name}</Text>
        <CustomButton label="Узнать больше" />
      </View>
    );
  };

  useEffect(() => {
    if (selected) {
      bs.current?.snapTo(1);
    }
  }, [selected]);

  useLayoutEffect(() => {
    if (!selected) {
      bs.current?.snapTo(0);
    }
  }, [selected]);

  const onMarkerPress = useCallback(({isClustered, data}) => {
    if (!isClustered) {
      setSelected(data);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ClusterMap
        onPress={() => {
          setSelected(null);
        }}
        bounds={bounds}>
        {markers.map((markersData, index) => {
          return (
            <ClusterMapShape
              key={index}
              index={index}
              markers={markersData}
              onMarkerPress={onMarkerPress}
            />
          );
        })}
      </ClusterMap>
      <BottomSheet
        borderRadius={15}
        ref={bs}
        snapPoints={[0, 150]}
        renderContent={rendnerInner}
        initialSnap={0}
        enabledGestureInteraction={false}
      />
    </View>
  );
};
