import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <View>
      <Text>useFetch</Text>
    </View>
  );
};

export default useFetch;
