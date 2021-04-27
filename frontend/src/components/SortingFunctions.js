
export const sortArray = (budgets, type) => {
        if(type.order === 'asc'){
            const sorted = [...budgets].sort((a, b) => a[type.prop] - b[type.prop]);
            return sorted
        }
        if(type.order === 'des'){
            const sorted = [...budgets].sort((a, b) => b[type.prop] - a[type.prop]);
            return sorted
        }

  };
