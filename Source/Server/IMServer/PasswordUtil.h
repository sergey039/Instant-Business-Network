#if !defined(PASSWORD_UTIL_H__D9E9B180_7746_4DE6_ABA9_4F1B4D8AD7F9__INCLUDED_)
#define PASSWORD_UTIL_H__D9E9B180_7746_4DE6_ABA9_4F1B4D8AD7F9__INCLUDED_

HRESULT PasswordUtil_Check(LPCWSTR password, LPCWSTR salt, LPCWSTR passwordHash, BOOL* pResult);

#endif