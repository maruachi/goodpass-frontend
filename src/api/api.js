import http from "@/api/http";
const getMembershipOption = async (businessId) => {
    try{
        const response = await http.get(`/api/business/${businessId}/membership/types`);
        return response.data.membershipTypeResponseDtos;
    }catch (e) {
        alert('서버 오류가 발생했습니다. 다시 시도해주세요.');
    }
}

export default getMembershipOption;