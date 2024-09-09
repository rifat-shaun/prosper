import React, { FC } from "react";
import { Range } from "react-range";

interface RangeSliderProps {
  values: number[];
  setValues: (values: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
}

export const RangeSlider: FC<RangeSliderProps> = ({
  values,
  setValues,
  min = 0,
  max = 10,
  step = 1,
  isDisabled = false,
}) => {
  const percentValue = ((values[0] - min) / (max - min)) * 100;

  return (
    <div
      className="px-2 bg-black w-[180px] h-[16px] rounded-xl"
      style={{
        background: `
            linear-gradient(
                to right, 
                #777 ${percentValue}%, 
                #eee ${percentValue}%
            )
        `,
      }}
    >
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        disabled={isDisabled}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => {
          return (
            <div
              {...props}
              key={'thumb'}
              style={{
                height: "16px",
                width: "180px",
                background: `linear-gradient(
                  to right, 
                  #777 ${percentValue}%, 
                  #eee ${percentValue}%
                )`,
                position: "relative",
              }}
            >
              {children}
              {Array.from({ length: Math.floor((max - min) / step) + 1 }).map(
                (_, i) => {
                  const valueAtPosition = min + i * step;
                  const left = `${((i * step) / (max - min)) * 100}%`;
                  return (
                    valueAtPosition !== values[0] && (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left,
                          width: "4px",
                          height: "4px",
                          backgroundColor:
                            valueAtPosition < values[0] ? "#eee" : "#777",
                          borderRadius: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    )
                  );
                }
              )}
            </div>
          );
        }}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={'thumb'}
            style={{
              height: "24px",
              width: "4px",
              backgroundColor: "#999",
              border: "5px solid #fff",
              borderRadius: "14px",
              outline: "none",
              zIndex: 1,
            }}
          />
        )}
      />
    </div>
  );
};
