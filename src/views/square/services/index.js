import JcRequest from '@src/services'

export function getSwiper() {
    return JcRequest.get({
        url: '/api/pub/getSwipper'
    })
}
