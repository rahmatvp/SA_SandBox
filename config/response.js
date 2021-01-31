exports.success = (response) => {
    return {
       success : true,
       message: response.message ? response.message : 'successfully',
       data: response.data ? response.data : [],
    };
};

exports.failed = (response) => {
    return {
       success : true,
       message: response.message ? response.message : 'failed',
       data: response.data ? response.data : [],
    };
};