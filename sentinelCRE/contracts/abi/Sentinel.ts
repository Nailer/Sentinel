export const Sentinel = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_creForwarder',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_vault',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'report',
                type: 'bytes'
            }
        ],
        name: 'onReport',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
] as const;
