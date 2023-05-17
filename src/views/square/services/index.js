import JcRequest from '@src/services'

export function getSwiper() {
    return JcRequest.get({
        url: '/api/pub/getSwipper'
    })
}

export function getActivityList(index) {
    return JcRequest.get({
        url: '/api/pub/getDetail',
        params: {
            acid: index
        }
    })
}