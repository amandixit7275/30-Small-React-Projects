import React from "react";
import { createContext, useState, useEffect } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      let response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
      setLoading(false);
    } catch {
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <div>
      <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
        {children}
      </FeatureFlagsContext.Provider>
    </div>
  );
}

export default FeatureFlagGlobalState;
